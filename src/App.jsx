import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Posts from './components/Posts';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState('home'); // 'home' | 'about' | 'docs'

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar onNavigate={(p) => setPage(p)} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {page === 'about' ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <p className="text-gray-600 dark:text-gray-300">This is the About panel. Describe the app here.</p>
            <div className="mt-4">
              <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={() => setPage('home')}>Back</button>
            </div>
          </div>
        ) : page === 'docs' ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Docs</h2>
            <p className="text-gray-600 dark:text-gray-300">Documentation and usage notes go here.</p>
            <div className="mt-4">
              <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={() => setPage('home')}>Back</button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TaskManager />
              <Posts />
            </div>

            {/* API data display will go here */}
            <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">API Data</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fetch and display data from an API here
              </p>
            </div>
          </>
        )}
        
      </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 