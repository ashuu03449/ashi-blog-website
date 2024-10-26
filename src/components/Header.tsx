"use client";

import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 relative z-50">
      {/* Logo Section */}
      <div>
        <h2 className="text-2xl font-semibold text-black">Web Wonders</h2>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-black">
          Home
        </Link>
        <Link href="/about" className="text-black">
          About
        </Link>
        <Link href="/blog" className="text-black">
          Blog
        </Link>
        <Link href="/contact" className="text-black">
          Contact
        </Link>
      </nav>

      {/* Hamburger Icon for Mobile */}
      {!isOpen && (
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBarsStaggered size={24} />
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center 
          md:hidden transition-transform duration-300 ease-in-out"
        >
          <div
            className="absolute top-6 right-6 text-black cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes size={24} />
          </div>
          <nav className="flex flex-col space-y-6 text-lg">
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:text-purple-500 text-xl"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="hover:text-purple-500 text-xl"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className="hover:text-purple-500 text-xl"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="hover:text-purple-500 text-xl"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
