import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ title = 'Stemiot Task Manager', onNavigate = () => {} }) => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('about')}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('docs')}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded"
            >
              Docs
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
