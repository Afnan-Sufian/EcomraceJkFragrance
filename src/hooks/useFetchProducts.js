import { useState, useEffect } from "react";
import localProducts from "../data/productsData";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    setProducts(localProducts);
    setLoading(false);
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;
