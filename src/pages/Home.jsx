import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductGrid from "../components/product/ProductGrid";

function Home() {
  const { products, loading, error } = useFetchProducts();

  // 3D Tilt calculations for Founder Card
  const fx = useMotionValue(0.5);
  const fy = useMotionValue(0.5);

  const fRotateX = useSpring(useTransform(fy, [0, 1], [15, -15]), { damping: 25, stiffness: 180 });
  const fRotateY = useSpring(useTransform(fx, [0, 1], [-15, 15]), { damping: 25, stiffness: 180 });

  function handleFounderMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    fx.set(mouseX / width);
    fy.set(mouseY / height);
  }

  function handleFounderMouseLeave() {
    fx.set(0.5);
    fy.set(0.5);
  }

  return (
    <div className="min-h-screen">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-6"
      >
        <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-4">
          ✨ Premium Products Collection
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
          Welcome to JK Fragrance
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          The best products from around the world, all in one place. Find what you love and add it to your cart.
        </p>
      </motion.div>

      {/* Brand & Founder Feature Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 mb-16"
      >
        <div className="glass-card overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12 border-amber-500/20">
          <div className="space-y-6">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/25 rounded-full text-xs font-semibold uppercase tracking-wider">
              Our Legacy & Craft
            </span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Crafted by Masters, Inspired by Royalty
            </h2>
            <p className="text-white/70 leading-relaxed">
              At JK Fragrance, we believe that a scent is more than just a fragrance—it is a statement of identity, luxury, and heritage. Under the guidance of our founder, we select only the finest natural ouds, fresh roses, and warm spices to curate collections that stand the test of time.
            </p>
            <div className="pt-2">
              <p className="text-amber-400 font-semibold text-lg">JK Fragrance Signature</p>
              <p className="text-white/40 text-sm">Est. 2026</p>
            </div>
          </div>
          <div className="relative flex justify-center" style={{ perspective: 1000 }}>
            {/* Soft gold glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-2xl blur-2xl -z-10" />
            <motion.div
              style={{ rotateX: fRotateX, rotateY: fRotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleFounderMouseMove}
              onMouseLeave={handleFounderMouseLeave}
              className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-white cursor-pointer"
            >
              <img
                src="/founder.jpg"
                alt="JK Fragrance Founder & Heritage"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div
                style={{ transform: "translateZ(60px)" }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
              >
                <div>
                  <p className="text-white font-bold text-lg">The Essence of Tradition</p>
                  <p className="text-amber-400 text-xs font-medium">Founder, JK Fragrance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
          <p className="text-white/50 text-sm">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="mx-6 my-8 glass-card p-8 text-center border-red-500/30">
          <p className="text-4xl mb-4">😕</p>
          <p className="text-red-400 font-semibold text-lg mb-2">Something went wrong!</p>
          <p className="text-white/50 text-sm">{error}</p>
          <button
            onClick={function () { window.location.reload(); }}
            className="mt-4 px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition-all duration-200 text-sm font-medium"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white/40 text-sm text-center mb-6">
            {products.length} products found
          </p>
          <ProductGrid products={products} />
        </motion.div>
      )}
    </div>
  );
}

export default Home;
