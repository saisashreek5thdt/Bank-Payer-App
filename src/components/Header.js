import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const navItems = [
    { label: "Features", links: ["Core Features", "Integrations", "Pricing"] },
    { label: "Pricing", links: ["Basic Plan", "Pro Plan", "Enterprise"] },
    { label: "Contact", links: ["Support", "Feedback", "Careers"] },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          PayerFinance
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
          </li>
          {/* Navigation Links with Dropdown */}
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                className="text-gray-600 hover:text-blue-600"
                onClick={() => handleDropdown(index)}
              >
                {item.label}
              </button>
              {dropdownOpen === index && (
                <ul className="absolute bg-white shadow-md rounded mt-2 py-2 w-48">
                  {item.links.map((link, idx) => (
                    <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                      <Link to={`/${link.toLowerCase().replace(" ", "-")}`}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border rounded-lg overflow-hidden shadow-md"
        >
          <input
            type="text"
            className="p-2 text-gray-700 w-60 focus:outline-none"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-all"
          >
             <FaSearch />
          </button>
        </form>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
