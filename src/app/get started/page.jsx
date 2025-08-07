"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Let's Get Started!
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg mb-8 text-center max-w-xl"
      >
        Kickstart your journey with our powerful platform. Discover amazing features and start building your next project today.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          href="/about"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
