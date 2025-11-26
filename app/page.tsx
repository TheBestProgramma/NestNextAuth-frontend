import Link from 'next/link';
import { Users, UserPlus, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-transparent">
        {/* Decorative background elements - only visible in light mode */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:hidden"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:hidden"></div>
          {/* Dark mode decorative elements */}
          <div className="hidden dark:block absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full filter blur-3xl opacity-20"></div>
          <div className="hidden dark:block absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                NestNextAuth
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
              A modern user management system built with Next.js and NestJS.
              Manage users effortlessly with a beautiful, responsive interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register" className="group">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <UserPlus className="h-5 w-5" />
                  Register User
                </Button>
              </Link>
              <Link href="/users" className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <Users className="h-5 w-5" />
                  View Users
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage users efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-gray-800 dark:to-gray-700 border border-blue-200/50 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg mb-4">
                <UserPlus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                User Registration
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                Easily register new users with a simple, intuitive form
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-gray-800 dark:to-gray-700 border border-purple-200/50 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                User Dashboard
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                View and manage all users in a beautiful dashboard interface
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-gray-800 dark:to-gray-700 border border-green-200/50 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure & Modern
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                Built with modern technologies and security best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 dark:bg-gray-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 dark:bg-gray-600/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-8">
            Start managing your users today with our simple and intuitive interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="!bg-transparent !text-white !border-2 !border-white hover:!bg-white/20 hover:!border-white/80 dark:!border-gray-600 dark:hover:!bg-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Register Now
              </Button>
            </Link>
            <Link href="/users" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="!bg-transparent !text-white !border-2 !border-white hover:!bg-white/20 hover:!border-white/80 dark:!border-gray-600 dark:hover:!bg-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                View Users
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
