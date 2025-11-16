'use client';

import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      className,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles = clsx(
      'inline-flex items-center justify-center font-medium rounded-lg',
      'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative'
    );

    const variantStyles = {
      primary: clsx(
        'bg-blue-600 text-white hover:bg-blue-700',
        'focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
      ),
      secondary: clsx(
        'bg-gray-600 text-white hover:bg-gray-700',
        'focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600'
      ),
      danger: clsx(
        'bg-red-600 text-white hover:bg-red-700',
        'focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600'
      ),
      outline: clsx(
        'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
        'hover:bg-gray-50 dark:hover:bg-gray-800',
        'focus:ring-gray-500'
      ),
      ghost: clsx(
        'text-gray-700 hover:bg-gray-100',
        'focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-700'
      ),
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={isDisabled}
        aria-label={ariaLabel || (isLoading ? 'Loading' : undefined)}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        <span className={clsx(isLoading && 'opacity-70')}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
