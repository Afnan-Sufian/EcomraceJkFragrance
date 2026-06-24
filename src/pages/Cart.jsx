import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  let grandTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    grandTotal = grandTotal + (cartItems[i].price * cartItems[i].quantity);
  }

  function handleCheckout() {
    navigate("/checkout-success");
  }

  return (
    <div className="min-h-screen px-6 py-8 max-w-3xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold gradient-text mb-2">My Cart 🛒</h1>
        <p className="text-white/40 text-sm">
          {cartItems.length === 0
            ? "Your cart is empty"
            : `${cartItems.length} item types in your cart`}
        </p>
      </motion.div>

      {cartItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-16 text-center"
        >
          <p className="text-6xl mb-6">🛍️</p>
          <p className="text-white font-semibold text-xl mb-2">
            Your cart is empty!
          </p>
          <p className="text-white/40 text-sm mb-8">
            Browse our products and add something you like.
          </p>
          <Link to="/">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white rounded-xl font-semibold transition-all duration-200">
              Start Shopping
            </button>
          </Link>
        </motion.div>
      )}

      {cartItems.length > 0 && (
        <div className="flex flex-col gap-4">

          <AnimatePresence>
            {cartItems.map(function (item) {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 mt-4"
          >
            <h2 className="text-white font-bold text-lg mb-4">Order Summary</h2>

            <div className="flex justify-between text-white/60 text-sm mb-2">
              <span>Subtotal</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-white/60 text-sm mb-4">
              <span>Shipping</span>
              <span className="text-green-400">FREE ✓</span>
            </div>

            <div className="border-t border-white/10 my-4" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-bold text-lg">Total</span>
              <span className="gradient-text font-extrabold text-2xl">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white rounded-xl font-bold text-lg transition-all duration-200 shadow-lg shadow-amber-500/25"
            >
              Checkout 🚀
            </motion.button>

            <Link to="/">
              <p className="text-center text-white/40 text-sm mt-4 hover:text-white/70 transition-all cursor-pointer">
                ← Continue Shopping
              </p>
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Cart;
