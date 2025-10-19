import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import Posts from "./components/Posts";
import ThemeProvider from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState("home"); // 'home' | 'about' | 'docs'

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar onNavigate={(p) => setPage(p)} />

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {page === "about" ? (
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">
                About Stemiot Task Manager
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                <b>Stemiot Task Manager</b> is a lightweight productivity web
                application designed to help users stay organized while also
                offering a quick and interactive way to expand vocabulary. The
                application combines a simple task management tool with a
                built-in word dictionary feature powered by a free public API.
                It was built as a demonstration of modern front-end development
                skills, including component-based architecture, state
                management, API integration and responsive UI design. <br />
                <h2 className="text-2xl font-bold mb-2">App Vision</h2>
                The idea behind Stemiot Task Manager is to create a productive
                workspace that not only helps users manage daily tasks but also
                improves language skills in a fun and interactive way. The goal
                is to keep it minimal, fast and user-friendly.
              </p>
              <div className="mt-4">
                <button
                  className="px-3 py-1 bg-indigo-600 text-white rounded"
                  onClick={() => setPage("home")}
                >
                  Back
                </button>
              </div>
            </div>
          ) : page === "docs" ? (
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Docs</h2>
              <p className="text-gray-600 dark:text-gray-300">
                <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
                Stemiot Task Manager is a web-based productivity tool that
                  allows users to: <ul className="list-disc pl-6 ">
                    <li>Add and delete daily tasks.</li>
                    <li> View randomly generated words.</li>
                    <li>Click on any word to get its meaning using a dictionary API.</li>
                    <li>Search tasks or words quickly in real-time.</li>
                 
                  </ul>   It
                is built using React + Vite and styled with Tailwind CSS, with
                dictionary functionality powered by the Datamuse / Free
                Dictionary API.
              </p>
              <div className="mt-4">
                <button
                  className="px-3 py-1 bg-indigo-600 text-white rounded"
                  onClick={() => setPage("home")}
                >
                  Back
                </button>
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
