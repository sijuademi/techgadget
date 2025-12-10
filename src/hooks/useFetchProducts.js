import { useEffect, useState } from "react";
import productsData from "../../data/products.json";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProducts(productsData.products);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);
  return { products, isLoading, error };
};

export default useFetchProducts;
