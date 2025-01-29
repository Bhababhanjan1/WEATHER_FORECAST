import React from 'react';
import { Cloud, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">WeatherCast</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                {isDark ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}