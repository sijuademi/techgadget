import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("There was an error in getting product");
        }

        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { products, isLoading, error };
};

export default useFetchProducts;
