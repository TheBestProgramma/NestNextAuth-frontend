'use client';

import { useState, useEffect } from 'react';
import { Users, RefreshCw, AlertCircle, UserPlus } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { api } from '@/lib/api';
import { User } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.getUsers();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative background elements - separate for light and dark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light mode decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl dark:hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl dark:hidden"></div>
        {/* Dark mode decorative elements */}
        <div className="hidden dark:block absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl"></div>
        <div className="hidden dark:block absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Users Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage and view all registered users
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={fetchUsers}
                disabled={isLoading}
                isLoading={isLoading}
                className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                variant="primary"
                onClick={() => window.location.href = '/register'}
                className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <UserPlus className="h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="mb-6">
          <Card className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 border-0 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-50 dark:text-gray-200 text-sm font-medium">
                  Total Users
                </p>
                <p className="text-white dark:text-white text-3xl font-bold mt-1">
                  {isLoading ? '...' : users.length}
                </p>
              </div>
              <Users className="h-12 w-12 text-white/50 dark:text-gray-300/50" />
            </div>
          </Card>
        </div>

        {/* Loading State */}
        {isLoading && users.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <RefreshCw className="h-12 w-12 text-blue-500 dark:text-gray-400 animate-spin mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Loading users...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 shadow-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error loading users
                </h3>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  {error}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchUsers}
                className="ml-auto border-2 border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400"
              >
                Try Again
              </Button>
            </div>
          </Card>
        )}

        {/* Empty State */}
        {!isLoading && !error && users.length === 0 && (
          <Card className="text-center py-16 shadow-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <Users className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No users found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get started by registering a new user.
            </p>
            <Button
              variant="primary"
              onClick={() => window.location.href = '/register'}
              className="flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <UserPlus className="h-4 w-4" />
              Register First User
            </Button>
          </Card>
        )}

        {/* Users Grid */}
        {!isLoading && !error && users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user) => (
              <Card
                key={user._id}
                hover
                className="transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xl shadow-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Joined:</span>
                        <span>{formatDate(user.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
