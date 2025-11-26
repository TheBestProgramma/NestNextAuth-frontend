'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TestThemePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClasses, setHtmlClasses] = useState('');

  useEffect(() => {
    setMounted(true);
    setHtmlClasses(document.documentElement.className);
    
    // Watch for class changes
    const observer = new MutationObserver(() => {
      setHtmlClasses(document.documentElement.className);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Theme Debug Page
        </h1>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
          <p className="text-gray-900 dark:text-white">
            <strong>Theme from next-themes:</strong> {mounted ? theme : 'loading...'}
          </p>
          <p className="text-gray-900 dark:text-white">
            <strong>HTML classes:</strong> {htmlClasses || 'none'}
          </p>
          <p className="text-gray-900 dark:text-white">
            <strong>Has 'dark' class:</strong> {htmlClasses.includes('dark') ? 'YES' : 'NO'}
          </p>
          <p className="text-gray-900 dark:text-white">
            <strong>localStorage theme:</strong> {typeof window !== 'undefined' ? localStorage.getItem('theme') : 'N/A'}
          </p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setTheme('light')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Set Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="px-4 py-2 bg-gray-800 text-white rounded ml-2"
          >
            Set Dark
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600">
          <p className="text-gray-900 dark:text-white">
            This box should be white in light mode and gray-800 in dark mode
          </p>
        </div>
      </div>
    </div>
  );
}




