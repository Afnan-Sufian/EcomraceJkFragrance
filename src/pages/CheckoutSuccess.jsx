import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="glass-card p-12 text-center max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-extrabold gradient-text mb-3">
          Order Placed! 🎉
        </h1>

        <p className="text-white/60 text-sm mb-2">
          Your order has been successfully placed.
        </p>
        <p className="text-white/40 text-xs mb-8">
          A confirmation email will be sent shortly. Thank you for shopping!
        </p>

        <div className="glass-card px-4 py-2 mb-8 inline-block">
          <p className="text-white/40 text-xs">Order ID</p>
          <p className="text-amber-300 font-mono font-bold text-sm">
            #JKF-{Math.floor(Math.random() * 90000) + 10000}
          </p>
        </div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white rounded-xl font-bold transition-all duration-200"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default CheckoutSuccess;
