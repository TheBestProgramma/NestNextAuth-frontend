'use client';

import React from 'react';
import { clsx } from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  hover = false,
}) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-800',
        'rounded-xl shadow-lg dark:shadow-gray-900/50',
        'border-2 border-gray-200 dark:border-gray-700',
        'transition-all duration-300',
        hover && 'hover:shadow-xl dark:hover:shadow-gray-900/70',
        className
      )}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};
