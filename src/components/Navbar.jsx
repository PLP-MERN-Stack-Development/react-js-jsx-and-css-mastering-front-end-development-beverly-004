import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">React Week 3</h1>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-800 dark:bg-gray-300 dark:text-black rounded"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
