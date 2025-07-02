// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              className="h-8 w-8 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L24 22H0L12 0z" />
            </svg>
            <span className="text-xl font-semibold text-white">MySite</span>
          </div>
          <p className="text-sm">
            Empowering your business with innovative solutions and exceptional support.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.88-2.35 8.48 8.48 0 01-2.69 1.03 4.23 4.23 0 00-7.22 3.86A12 12 0 013 4.8a4.23 4.23 0 001.31 5.64 4.19 4.19 0 01-1.92-.53v.05a4.24 4.24 0 003.39 4.15 4.25 4.25 0 01-1.91.07 4.24 4.24 0 003.96 2.95A8.5 8.5 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.3 8.3 0 0024 5.56a8.46 8.46 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.6 3H4.4A1.4 1.4 0 003 4.4v15.2A1.4 1.4 0 004.4 21h15.2a1.4 1.4 0 001.4-1.4V4.4A1.4 1.4 0 0019.6 3zm-9 14H7v-6h3v6zm-1.5-6.9a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm10.5 6.9h-3v-3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3h-3v-6h3v1c.41-.59 1.09-1 1.84-1 1.38 0 2.5 1.12 2.5 2.5v3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.02 8.28 8.96v-6.35H8.38v-2.61h2.94V9.91c0-2.9 1.75-4.49 4.36-4.49 1.26 0 2.58.22 2.58.22v2.84h-1.45c-1.43 0-1.87.89-1.87 1.8v2.16h3.19l-.51 2.61h-2.68v6.35c4.7-.94 8.28-4.56 8.28-8.96 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MySite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
