import React from "react";
import { motion } from "framer-motion";
import ProductImage from "../product/ProductImage";

function CartItem({ item, removeFromCart }) {
  const itemTotalPrice = item.price * item.quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
      className="glass-card p-4 flex items-center gap-4"
    >
      <ProductImage
        productId={item.id}
        title={item.title}
        className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
      />

      <div className="flex-grow">
        <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
          {item.title}
        </h3>
        <p className="text-white/50 text-xs mb-2">
          ${item.price} × {item.quantity}
        </p>
        <p className="gradient-text font-bold text-base">
          ${itemTotalPrice.toFixed(2)}
        </p>
      </div>

      <div className="glass-card px-3 py-1 text-white font-bold text-sm">
        ×{item.quantity}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={function () { removeFromCart(item.id); }}
        className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-all duration-200 flex-shrink-0"
        title="Remove from cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </motion.div>
  );
}

export default CartItem;
