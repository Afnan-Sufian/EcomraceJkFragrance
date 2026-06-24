import React, { useState } from "react";
import ProductImage from "./ProductImage";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  // 3D Tilt calculations
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), { damping: 25, stiffness: 200 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  function handleAddToCart() {
    addToCart(product);
    setIsAdded(true);
    setTimeout(function () {
      setIsAdded(false);
    }, 1500);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card overflow-hidden flex flex-col group cursor-pointer"
      >
        <div className="relative overflow-hidden h-52 bg-white/5" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
          <ProductImage
            productId={product.id}
            title={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 bg-amber-500/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow gap-3">
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 flex-grow">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">⭐</span>
            <span className="text-white/60 text-xs">{product.rating}</span>
          </div>
          <span className="text-lg font-bold gradient-text">
            ${product.price}
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleAddToCart}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isAdded
              ? "bg-green-500 text-white"
              : "bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-500 hover:to-yellow-500"
          }`}
        >
          {isAdded ? "✓ Added!" : "Add to Cart"}
        </motion.button>
      </div>
      </motion.div>
    </div>
  );
}

export default ProductCard;
