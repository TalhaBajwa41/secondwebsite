// components/Header.js
'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0L24 22H0L12 0z" />
          </svg>
          <span className="text-xl font-bold">MySite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-200 transition">
            Services
          </Link>
          <Link href="/blog" className="hover:text-gray-200 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </nav>

        {/* Call-to-action Button */}
        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            href="/about"
            className="block hover:text-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block hover:text-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block hover:text-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/get-started"
            className="block bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
