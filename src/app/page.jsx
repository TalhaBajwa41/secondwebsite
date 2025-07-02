// components/Hero.js
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function Main() {
  return (
    <>
    <Header />

    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Empower Your Business
            <span className="block text-indigo-200">with Innovative Solutions</span>
          </h1>
          <p className="text-lg mb-8 text-indigo-100">
            We help companies accelerate their growth through cutting-edge digital products and exceptional support.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/get-started"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="border border-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/7876046/pexels-photo-7876046.jpeg?_gl=1*1az5m0q*_ga*NDQ1NzgzMjA5LjE3NTE0NTEyMDk.*_ga_8JE65Q40S6*czE3NTE0NTEyMDkkbzEkZzEkdDE3NTE0NTEyNDMkajI2JGwwJGgw"
            alt="Hero Illustration"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          />
          {/* Optional Decorative SVG */}
          <svg
            className="absolute -top-10 -right-10 w-40 h-40 opacity-30 text-white"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M43.4,-75.6C56.7,-66.2,67.6,-56.1,72.1,-43.6C76.5,-31.1,74.5,-15.6,73.8,-0.4C73.1,14.9,73.6,29.8,66.9,42.2C60.1,54.5,46.2,64.2,31,70.9C15.7,77.6,-1,81.4,-17.4,78.1C-33.8,74.8,-49.9,64.5,-59.7,50.3C-69.4,36.1,-72.8,18,-73.6,-0.6C-74.5,-19.2,-72.8,-38.4,-61.8,-49.3C-50.9,-60.2,-30.6,-62.8,-12.1,-69.1C6.4,-75.4,12.8,-85,24.4,-85.9C36,-86.8,50,-79,43.4,-75.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
}
