import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Vm handboll 2025</h1>
        
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu (hidden on small screens, shown on medium and larger screens) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Hem</a>
          <a href="#" className="text-gray-600 hover:text-black">Resultat</a>
          <a href="#" className="text-gray-600 hover:text-black">Matcher</a>
          <a href="#" className="text-gray-600 hover:text-black">Ligor</a>
          <a href="#" className="text-gray-600 hover:text-black">Info</a>
        </nav>

        {/* User login/register button (visible on all screen sizes) */}
        <div className="hidden md:block">
          <a href="#" className="text-gray-600 hover:text-black">Logga in/Registrera</a>
        </div>
      </div>

      {/* Mobile Menu (visible when the hamburger icon is clicked) */}
      {isOpen && (
        <nav className="md:hidden px-4 pt-4 pb-4">
          <a href="#" className="block text-gray-600 hover:text-black mb-2">Hem</a>
          <a href="#" className="block text-gray-600 hover:text-black mb-2">Resultat</a>
          <a href="#" className="block text-gray-600 hover:text-black mb-2">Matcher</a>
          <a href="#" className="block text-gray-600 hover:text-black mb-2">Ligor</a>
          <a href="#" className="block text-gray-600 hover:text-black mb-2">Info</a>
          <a href="#" className="block text-gray-600 hover:text-black">Logga in/Registrera</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
