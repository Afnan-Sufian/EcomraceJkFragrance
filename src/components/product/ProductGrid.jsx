import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../../context/CartContext";

function ProductGrid({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}

export default ProductGrid;
