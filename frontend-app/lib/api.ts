import { User, RegisterData } from './types';

/**
 * API Error class for better error handling
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'ApiError';
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/**
 * API Client for making HTTP requests to the backend
 */
class ApiClient {
  private readonly baseUrl: string;

  constructor() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    
    if (!process.env.NEXT_PUBLIC_API_URL && typeof window !== 'undefined') {
      console.warn(
        'NEXT_PUBLIC_API_URL is not set. Using default: http://localhost:3000'
      );
    }
    
    // Remove trailing slash if present
    this.baseUrl = apiUrl.replace(/\/$/, '');
  }

  /**
   * Private method to handle all HTTP requests
   * @param endpoint - API endpoint (e.g., '/auth/register')
   * @param options - Fetch options
   * @returns Typed response data
   * @throws ApiError if request fails
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    // Merge headers, allowing overrides
    const headers = {
      ...defaultHeaders,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      // Handle non-JSON responses (e.g., 204 No Content)
      if (response.status === 204) {
        return {} as T;
      }

      // Try to parse JSON response
      let data: any;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch (parseError) {
          throw new ApiError(
            'Failed to parse response as JSON',
            response.status,
            response.statusText
          );
        }
      } else {
        // If not JSON, get text
        const text = await response.text();
        throw new ApiError(
          text || `Unexpected content type: ${contentType}`,
          response.status,
          response.statusText
        );
      }

      // Handle error responses
      if (!response.ok) {
        // Extract error message from various possible structures
        let errorMessage: string;
        
        if (typeof data === 'string') {
          errorMessage = data;
        } else if (data?.message) {
          // Handle NestJS error format: { message: "error message" }
          errorMessage = Array.isArray(data.message) 
            ? data.message.join(', ') 
            : data.message;
        } else if (data?.error) {
          // Handle alternative error format
          errorMessage = typeof data.error === 'string' 
            ? data.error 
            : data.error?.message || 'An error occurred';
        } else if (data?.errorMessage) {
          errorMessage = data.errorMessage;
        } else {
          // Default messages based on status code
          switch (response.status) {
            case 400:
              errorMessage = 'Invalid request. Please check your input.';
              break;
            case 401:
              errorMessage = 'Invalid email or password.';
              break;
            case 409:
              errorMessage = 'This email is already registered.';
              break;
            case 422:
              errorMessage = 'Validation error. Please check your input.';
              break;
            case 500:
              errorMessage = 'Server error. Please try again later.';
              break;
            default:
              errorMessage = `Request failed with status ${response.status}`;
          }
        }
        
        throw new ApiError(
          errorMessage,
          response.status,
          response.statusText
        );
      }

      // Return typed data
      return data as T;
    } catch (error) {
      // Re-throw ApiError as-is
      if (error instanceof ApiError) {
        throw error;
      }

      // Handle network errors
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new ApiError(
          'Network error: Unable to reach the server. Please check your connection.',
          0,
          'Network Error'
        );
      }

      // Handle other errors
      throw new ApiError(
        error instanceof Error ? error.message : 'An unexpected error occurred',
        0,
        'Unknown Error'
      );
    }
  }

  /**
   * Register a new user
   * @param data - User registration data
   * @returns Created user (without password)
   */
  async register(data: RegisterData): Promise<User> {
    const response = await this.request<User | { user: User; message?: string }>(
      '/auth/register',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );

    // Handle different response structures
    if (response && typeof response === 'object' && 'user' in response) {
      return (response as { user: User }).user;
    }

    // If response is the user directly
    if (response && typeof response === 'object' && '_id' in response && 'email' in response && 'name' in response) {
      return response as User;
    }

    throw new ApiError('Invalid response format from registration endpoint');
  }

  /**
   * Get all users
   * @returns Array of users
   */
  async getUsers(): Promise<User[]> {
    const response = await this.request<User[] | { users: User[] }>(
      '/auth/users',
      {
        method: 'GET',
      }
    );

    // Handle different response structures
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object' && 'users' in response) {
      return (response as { users: User[] }).users;
    }

    throw new ApiError('Invalid response format from users endpoint');
  }
}

// Lazy initialization function to avoid issues during SSR
let apiInstance: ApiClient | null = null;

function getApiClient(): ApiClient {
  if (typeof window === 'undefined') {
    // Server-side: always create new instance
    return new ApiClient();
  }
  // Client-side: use singleton
  if (!apiInstance) {
    apiInstance = new ApiClient();
  }
  return apiInstance;
}

// Export singleton instance (lazy-initialized)
export const api = {
  register: (data: RegisterData) => getApiClient().register(data),
  getUsers: () => getApiClient().getUsers(),
} as Pick<ApiClient, 'register' | 'getUsers'>;

// Export class for testing or custom instances
export { ApiClient };
