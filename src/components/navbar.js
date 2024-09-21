import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-teal-500 text-3xl font-bold">
          FASHION GALLARY
        </a>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            WOMEN
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            MEN
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            KIDS
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            HOME
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            BRANDS
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            BEAUTY
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-teal-500"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <button className="text-gray-800 hover:text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="text-gray-800 hover:text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;