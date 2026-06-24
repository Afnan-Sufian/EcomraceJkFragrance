import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { totalCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 glass-card mx-4 mt-4 px-6 py-4 flex items-center justify-between">

      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white flex items-center justify-center p-0.5">
            <img
              src="/logo.jpg"
              alt="JK Fragrance Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <span className="text-xl font-bold gradient-text tracking-wide">JK Fragrance</span>
        </motion.div>
      </Link>

      <p className="hidden md:block text-white/40 text-sm font-medium tracking-wider uppercase">
        Premium Store
      </p>

      <Link to="/cart">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-3 glass-card hover:border-amber-400/50 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          {totalCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {totalCount}
            </motion.span>
          )}
        </motion.button>
      </Link>
    </nav>
  );
}

export default Navbar;
