import React from 'react';
import { Code2, MessageSquare, Search, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <span className="mr-2 text-xl font-bold text-gray-900 dark:text-white ml-2">
              DevConnect
            </span>
          </motion.div>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث عن مبرمجين أو مشاريع..."
                className="input pl-10 pr-4"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <MessageSquare className="h-6 w-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary flex items-center space-x-2"
            >
              <User className="h-5 w-5" />
              <span>تسجيل الدخول</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث عن مبرمجين أو مشاريع..."
                className="input pl-10 pr-4"
              />
            </div>
          </div>
          <button className="btn btn-primary w-full flex justify-center items-center">
            <User className="h-5 w-5 ml-2" />
            تسجيل الدخول
          </button>
          <button className="btn btn-secondary w-full flex justify-center items-center">
            <MessageSquare className="h-5 w-5 ml-2" />
            الرسائل
          </button>
        </div>
      </motion.div>
    </nav>
  );
}