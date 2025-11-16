export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
