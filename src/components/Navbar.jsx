import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = ["home", "about", "projects", "resume", "certifications", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Auto-detect preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Name */}
        <div className="text-xl font-bold text-[#1E90FF] dark:text-[#32CD32]">
          Gnaneshwar Reddy Dontireddy
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-100 font-medium">
          {menuItems.map((item) => (
            <li key={item} className="capitalize hover:text-[#32CD32] cursor-pointer transition">
              <Link to={item} smooth={true} duration={500} offset={-70}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Toggle */}
          <button onClick={toggleDarkMode} className="text-xl md:text-2xl transition hover:scale-110">
            {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-blue-500" />}
          </button>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-100">
            {menuItems.map((item) => (
              <li key={item} className="capitalize hover:text-[#32CD32] transition">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
