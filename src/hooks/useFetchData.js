import { useEffect, useState } from "react";
import allData from "../../data/products.json";

// Pass the 'key' you want (e.g., 'products' or 'cart')
export const useFetchData = (key) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        // specific check for the key
        if (!allData[key]) {
          throw new Error(`Data for key "${key}" not found.`);
        }

        setData(allData[key]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [key]); // Re-run if the key changes

  return { data, isLoading, error };
};
