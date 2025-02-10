import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Initialize dark mode state based on user's previous preference or system setting
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's system preference on initial load
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
    // Toggle the 'dark' class on the <html> element
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="p-5">
      <button
        className="p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
