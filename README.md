# NestNextAuth Frontend

A modern, responsive Next.js frontend application featuring a reusable UI component library and seamless integration with the NestJS backend microservices architecture.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Component Library](#component-library)
- [Pages](#pages)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Accessibility](#accessibility)
- [Dark Mode](#dark-mode)
- [Deployment](#deployment)
- [Development](#development)

## 🎯 Overview

This frontend application is built with Next.js 16 and React 19, featuring a modular architecture with a reusable component library. It integrates with the NestNextAuth backend to provide user registration and management functionality.

### Key Highlights

- ✅ **5 Reusable UI Components** - Button, Modal, InputField, Tabs, Card
- ✅ **Responsive Design** - Mobile-first approach with TailwindCSS
- ✅ **Accessibility** - WCAG compliant with ARIA attributes
- ✅ **Dark Mode** - Full theme support with system preference detection
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Modern Stack** - Next.js 16 App Router, React 19

## ✨ Features

### Core Features

- **User Registration** - Beautiful registration form with validation
- **User List** - Display all registered users with refresh functionality
- **State Management** - Proper loading, error, and success states
- **Error Handling** - User-friendly error messages and retry mechanisms
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

### Bonus Features

- ✅ **Dark Mode** - Theme switcher with persistent preference
- ✅ **Modern UI** - Gradient backgrounds, smooth animations, and transitions
- ✅ **Accessibility** - Keyboard navigation, screen reader support, focus management

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS 4** - Utility-first CSS framework

### Key Libraries

- `next-themes` - Dark mode support
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Conditional class utilities

## 📁 Project Structure

```
frontend-app/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── register/            # Registration page
│   │   └── page.tsx
│   └── users/               # Users list page
│       └── page.tsx
│
├── components/              # React components
│   ├── ui/                  # Reusable UI component library
│   │   ├── Button.tsx       # Button component
│   │   ├── Card.tsx         # Card component
│   │   ├── InputField.tsx   # Input field component
│   │   ├── Modal.tsx        # Modal component
│   │   └── Tabs.tsx         # Tabs component
│   ├── features/           # Feature-specific components
│   │   ├── RegisterForm.tsx
│   │   └── UsersList.tsx
│   ├── Navigation.tsx        # Navigation bar
│   └── ThemeProvider.tsx    # Theme context provider
│
├── lib/                     # Utility libraries
│   ├── api.ts              # API client for backend communication
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
│
├── public/                  # Static assets
├── tailwind.config.ts       # TailwindCSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20+ LTS
- **npm**, **yarn**, **pnpm**, or **bun** (package manager)
- **Backend API** - The NestNextAuth backend should be running (see backend README)

## 🚀 Installation

1. **Navigate to the frontend directory**
   ```bash
   cd NestNextAuth-frontend/frontend-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the `frontend-app` directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
   
   For production, use your deployed backend URL:
   ```env
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:3000` | Yes |

### Next.js Configuration

The project uses Next.js 16 with the App Router. Key configurations:

- **TypeScript** - Strict mode enabled
- **TailwindCSS** - Configured with dark mode support
- **ESLint** - Code quality and linting

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## 🧩 Component Library

The application includes 5 reusable UI components, each designed with accessibility, responsiveness, and customization in mind.

### 1. Button Component

A versatile button component with multiple variants and states.

**Location:** `components/ui/Button.tsx`

**Props:**
- `variant`: `'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'`
- `size`: `'sm' | 'md' | 'lg'`
- `isLoading`: `boolean` - Shows loading spinner
- `children`: `ReactNode` - Button content
- Standard HTML button attributes

**Example:**
```tsx
import { Button } from '@/components/ui/Button';

<Button 
  variant="primary" 
  size="lg" 
  isLoading={isLoading}
  onClick={handleClick}
>
  Submit
</Button>
```

**Features:**
- ✅ Loading state with spinner
- ✅ Disabled state handling
- ✅ Accessibility (aria-label, aria-busy)
- ✅ Dark mode support
- ✅ Responsive design

### 2. InputField Component

A comprehensive input field with label, error handling, and helper text.

**Location:** `components/ui/InputField.tsx`

**Props:**
- `label`: `string` - Field label
- `error`: `string` - Error message
- `helperText`: `string` - Helper text
- `required`: `boolean` - Required field indicator
- Standard HTML input attributes

**Example:**
```tsx
import { InputField } from '@/components/ui/InputField';

<InputField
  label="Email Address"
  name="email"
  type="email"
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
/>
```

**Features:**
- ✅ Label and helper text support
- ✅ Error state with visual feedback
- ✅ Accessibility (aria-invalid, aria-describedby)
- ✅ Dark mode support
- ✅ Responsive design

### 3. Modal Component

A fully accessible modal dialog with focus management.

**Location:** `components/ui/Modal.tsx`

**Props:**
- `isOpen`: `boolean` - Controls modal visibility
- `onClose`: `() => void` - Close handler
- `title`: `string` - Modal title (optional)
- `size`: `'sm' | 'md' | 'lg' | 'xl' | 'full'`
- `children`: `ReactNode` - Modal content

**Example:**
```tsx
import { Modal } from '@/components/ui/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

**Features:**
- ✅ Focus trap (keyboard navigation)
- ✅ ESC key to close
- ✅ Click outside to close
- ✅ Accessibility (role="dialog", aria-modal)
- ✅ Body scroll lock when open
- ✅ Dark mode support

### 4. Tabs Component

A keyboard-accessible tabbed interface.

**Location:** `components/ui/Tabs.tsx`

**Props:**
- `tabs`: `Tab[]` - Array of tab objects
- `defaultTab`: `string` - Initial active tab ID
- `onChange`: `(tabId: string) => void` - Tab change handler

**Tab Interface:**
```typescript
interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}
```

**Example:**
```tsx
import { Tabs } from '@/components/ui/Tabs';

<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  defaultTab="tab1"
  onChange={(id) => console.log('Tab changed:', id)}
/>
```

**Features:**
- ✅ Keyboard navigation (Arrow keys, Home, End)
- ✅ Accessibility (role="tablist", aria-selected)
- ✅ Smooth transitions
- ✅ Dark mode support

### 5. Card Component

A flexible card container component.

**Location:** `components/ui/Card.tsx`

**Props:**
- `title`: `string` - Card title (optional)
- `hover`: `boolean` - Enable hover effects
- `className`: `string` - Additional CSS classes
- `children`: `ReactNode` - Card content

**Example:**
```tsx
import { Card } from '@/components/ui/Card';

<Card title="User Card" hover>
  <p>Card content goes here</p>
</Card>
```

**Features:**
- ✅ Optional title section
- ✅ Hover effects
- ✅ Dark mode support
- ✅ Responsive design

## 📄 Pages

### Home Page (`/`)

Landing page with navigation and project overview.

**Location:** `app/page.tsx`

### Registration Page (`/register`)

User registration form with validation and state management.

**Location:** `app/register/page.tsx`

**Features:**
- ✅ Form validation (client-side)
- ✅ Loading state during submission
- ✅ Success state with redirect
- ✅ Error handling with user-friendly messages
- ✅ Responsive design
- ✅ Dark mode support

**API Integration:**
- Calls `POST /auth/register` endpoint

### Users Page (`/users`)

Displays all registered users with refresh functionality.

**Location:** `app/users/page.tsx`

**Features:**
- ✅ Loading state
- ✅ Error state with retry button
- ✅ Empty state
- ✅ User cards with avatar initials
- ✅ Refresh functionality
- ✅ Responsive grid layout
- ✅ Dark mode support

**API Integration:**
- Calls `GET /auth/users` endpoint

## 🔌 API Integration

The application uses a centralized API client for backend communication.

### API Client

**Location:** `lib/api.ts`

**Methods:**
- `api.register(data: RegisterData): Promise<User>` - Register a new user
- `api.getUsers(): Promise<User[]>` - Get all users

**Error Handling:**
- Network errors
- HTTP error responses
- Validation errors
- User-friendly error messages

**Example Usage:**
```typescript
import { api } from '@/lib/api';

try {
  const user = await api.register({
    email: 'user@example.com',
    name: 'John Doe',
    password: 'password123'
  });
  console.log('User registered:', user);
} catch (error) {
  console.error('Registration failed:', error.message);
}
```

### Type Definitions

**Location:** `lib/types.ts`

```typescript
interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface RegisterData {
  email: string;
  name: string;
  password: string;
}

type LoadingState = 'idle' | 'loading' | 'success' | 'error';
```

## 🎨 Styling

### TailwindCSS

The project uses TailwindCSS 4 for styling with a mobile-first approach.

**Configuration:** `tailwind.config.ts`

**Features:**
- Dark mode support via `dark:` prefix
- Custom color palette
- Responsive breakpoints
- Utility classes

### Global Styles

**Location:** `app/globals.css`

Includes:
- TailwindCSS directives
- Custom CSS variables
- Dark mode styles
- Base typography

### Responsive Design

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ♿ Accessibility

All components are built with accessibility in mind:

### ARIA Attributes

- `aria-label` - Descriptive labels
- `aria-invalid` - Form validation states
- `aria-describedby` - Error and helper text
- `aria-busy` - Loading states
- `aria-selected` - Tab selection
- `role` - Semantic roles (dialog, tablist, etc.)

### Keyboard Navigation

- ✅ Tab order management
- ✅ Focus trap in modals
- ✅ Keyboard shortcuts (ESC to close modals)
- ✅ Arrow key navigation in tabs

### Screen Reader Support

- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt text for icons
- ✅ Descriptive button labels

## 🌙 Dark Mode

Dark mode is fully implemented using `next-themes`.

### Theme Provider

**Location:** `components/ThemeProvider.tsx`

### Features

- ✅ System preference detection
- ✅ Manual theme toggle
- ✅ Persistent theme preference (localStorage)
- ✅ Smooth transitions
- ✅ Theme toggle button in navigation

### Usage

The theme is automatically applied throughout the application. Users can toggle between light and dark modes using the theme button in the navigation bar.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable:
   - `NEXT_PUBLIC_API_URL` - Your backend API URL
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify** - Similar to Vercel
- **Railway** - Full-stack deployment
- **AWS Amplify** - AWS hosting
- **Docker** - Containerized deployment

### Environment Variables

Ensure `NEXT_PUBLIC_API_URL` is set correctly for your deployment environment.

## 💻 Development

### Code Structure

- **Components** - Reusable UI components in `components/ui/`
- **Features** - Feature-specific components in `components/features/`
- **Pages** - Next.js pages in `app/`
- **Utilities** - Helper functions in `lib/`

### Best Practices

1. **TypeScript** - Always use TypeScript types
2. **Components** - Keep components small and focused
3. **Accessibility** - Always include ARIA attributes
4. **Responsive** - Test on mobile, tablet, and desktop
5. **Error Handling** - Provide user-friendly error messages

### Adding New Components

1. Create component file in `components/ui/`
2. Export component and types
3. Add to component library documentation
4. Include accessibility attributes
5. Add dark mode support
6. Make it responsive

### Adding New Pages

1. Create page file in `app/`
2. Use client components for interactivity
3. Implement loading, error, and success states
4. Add to navigation if needed
5. Test responsive design

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Integration with Backend

This frontend integrates with the NestNextAuth backend:

- **Registration**: `POST /auth/register`
- **User List**: `GET /auth/users`

Ensure the backend is running and accessible at the URL specified in `NEXT_PUBLIC_API_URL`.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Solomon Kiptoo**
- GitHub: [@TheBestProgramma](https://github.com/TheBestProgramma)

---

**Built with ❤️ using Next.js and React**
