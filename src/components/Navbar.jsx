import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation(); // To check the current route

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchValue(""); // Clear the input
    onSearch(""); // Notify parent about the cleared search
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur(); // Remove focus from the input field
    }
  };

  // Check if we're on the remotes or ac-remotes page
  const isRemotesPage = location.pathname === "/remotes" || location.pathname === "/ac-remotes";

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-8">
        {/* Top Row: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-se-logo-vector-png-image_6704562.png" // Update this path to your logo file
              alt="Suraj Electronics Logo"
              className="h-10 w-10 cursor-pointer"
              onClick={() => window.location.href = "/"} // Navigate to Home
            />
            <Link to="/" className="text-2xl font-bold">
              Suraj Electronics
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/remotes" 
              className={`hover:text-blue-200 transition duration-300 ${location.pathname === "/remotes" ? "font-bold border-b-2 border-white pb-1" : ""}`}
            >
              TV Remotes
            </Link>
            <Link 
              to="/ac-remotes" 
              className={`hover:text-blue-200 transition duration-300 ${location.pathname === "/ac-remotes" ? "font-bold border-b-2 border-white pb-1" : ""}`}
            >
              AC Remotes
            </Link>
            <Link 
              to="/stands" 
              className={`hover:text-blue-200 transition duration-300 ${location.pathname === "/stands" ? "font-bold border-b-2 border-white pb-1" : ""}`}
            >
              Stands
            </Link>
          </div>
      
        </div>

        {/* Bottom Row: Search Bar (only in /remotes or /ac-remotes) */}
        {isRemotesPage && (
          <div className="mt-4 relative">
            <input
              type="text"
              value={searchValue}
              placeholder={location.pathname === "/ac-remotes" ? "Search AC remotes..." : "Search TV remotes..."}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring focus:ring-blue-400"
            />
            {/* Clear Button */}
            {searchValue && (
              <button
                onClick={handleClearSearch}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
