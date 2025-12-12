import { useEffect, useState } from "react";
import productsData from "../../data/products.json";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData.products); // Use the imported data
      setIsLoading(false);
    }, 500);
  }, []);

  return { products, isLoading };
};

export default useFetchProducts;
