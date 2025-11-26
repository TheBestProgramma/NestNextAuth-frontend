# NestNextAuth Frontend

A modern, responsive Next.js frontend application featuring a reusable UI component library and seamless integration with the NestJS backend API.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Component Library](#component-library)
- [Pages](#pages)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Development](#development)
- [Deployment](#deployment)

## 🎯 Overview

This frontend application provides a beautiful, modern interface for user management, built with Next.js 16 and React 19. It features a comprehensive reusable component library and integrates seamlessly with the NestJS backend microservices architecture.

## ✨ Features

### Core Features
- **User Registration** - Beautiful registration form with validation
- **User Management** - View and manage all registered users
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Dark Mode** - Full dark mode support with theme switching
- **Accessibility** - ARIA attributes and keyboard navigation
- **Error Handling** - Comprehensive error states and user feedback
- **Loading States** - Smooth loading indicators

### UI Component Library
- **Button** - Multiple variants, sizes, and states
- **InputField** - Form inputs with labels, errors, and validation
- **Modal** - Accessible modal dialogs with focus management
- **Tabs** - Tabbed interfaces with keyboard navigation
- **Card** - Flexible card components for content display

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: TailwindCSS 4.x
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode)
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
NestNextAuth-frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── register/          # Registration page
│   └── users/             # Users list page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── InputField.tsx
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   └── Card.tsx
│   ├── features/          # Feature-specific components
│   │   ├── RegisterForm.tsx
│   │   └── UsersList.tsx
│   ├── Navigation.tsx     # Main navigation
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/
│   ├── api.ts            # API client
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn or pnpm
- Backend API running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NestNextAuth-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```
   Replace with your backend API URL.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:4000` |

### Port Configuration

By default, the app runs on port 3000. To use a different port:

```bash
PORT=3001 npm run dev
```

## 🧩 Component Library

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant`: `primary` | `secondary` | `ghost` | `danger`
- `size`: `sm` | `md` | `lg`
- `isLoading`: boolean
- `disabled`: boolean

### InputField

Form input with label, error handling, and validation.

```tsx
import { InputField } from '@/components/ui/InputField';

<InputField
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

**Props:**
- `label`: string
- `type`: HTML input types
- `error`: string | null
- `helperText`: string
- `required`: boolean

### Modal

Accessible modal dialog with focus management.

```tsx
import { Modal } from '@/components/ui/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  Modal content
</Modal>
```

**Props:**
- `isOpen`: boolean
- `onClose`: () => void
- `title`: string
- `size`: `sm` | `md` | `lg` | `xl`

### Tabs

Tabbed interface with keyboard navigation.

```tsx
import { Tabs } from '@/components/ui/Tabs';

<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  defaultTab="tab1"
/>
```

### Card

Flexible card component for content display.

```tsx
import { Card } from '@/components/ui/Card';

<Card title="Card Title" hover>
  Card content
</Card>
```

## 📄 Pages

### Home (`/`)

Welcome page with project overview and navigation.

### Registration (`/register`)

User registration form with:
- Name, email, and password fields
- Form validation
- Error handling
- Success feedback
- Automatic redirect to users page

### Users (`/users`)

User management page with:
- List of all registered users
- User cards with details
- Refresh functionality
- Loading and error states
- Empty state handling

## 🔌 API Integration

The frontend communicates with the backend via the API client in `lib/api.ts`.

### API Client

```typescript
import { api } from '@/lib/api';

// Register a user
const user = await api.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
});

// Get all users
const users = await api.getUsers();
```

### Error Handling

The API client handles:
- Network errors
- HTTP errors
- Validation errors
- Response parsing

## 🎨 Styling

### TailwindCSS

The project uses TailwindCSS 4.x for styling with:
- Custom color palette
- Responsive breakpoints
- Dark mode support
- Utility classes

### Dark Mode

Dark mode is implemented using `next-themes`:
- System preference detection
- Manual toggle
- Persistent theme selection
- Smooth transitions

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Flexible layouts
- Touch-friendly interactions

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Code Style

- ESLint for code quality
- TypeScript for type safety
- Consistent component structure
- Clear naming conventions

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

### Build for Production

```bash
npm run build
npm run start
```

## 🔗 Backend Integration

This frontend is designed to work with the NestNextAuth backend:

- **Gateway URL**: Configured via `NEXT_PUBLIC_API_URL`
- **Endpoints**:
  - `POST /auth/register` - User registration
  - `GET /auth/users` - Get all users
- **CORS**: Backend must allow frontend origin

## 📝 Key Features

### Accessibility

- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support

### Performance

- Server-side rendering (SSR)
- Client-side hydration
- Code splitting
- Optimized images

### User Experience

- Loading states
- Error handling
- Success feedback
- Smooth animations

## 🐛 Troubleshooting

### API Connection Issues

- Verify `NEXT_PUBLIC_API_URL` is correct
- Check backend is running
- Verify CORS configuration
- Check browser console for errors

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (20.x+)

### Port Conflicts

- Change port: `PORT=3001 npm run dev`
- Kill process using port 3000

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is part of the NestNextAuth full-stack application.

---

**Built with ❤️ using Next.js and React**

