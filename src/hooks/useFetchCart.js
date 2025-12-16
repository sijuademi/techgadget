import { useEffect, useState } from "react";
import cartData from "../../data/products.json";

export const useFetchCart = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCart(cartData.cart); // Use the imported data
      setIsLoading(false);
    }, 500);
  }, []);

  return { cart, isLoading };
};

export default useFetchCart;
