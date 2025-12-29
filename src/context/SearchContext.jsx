import { createContext, useContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const { data: products } = useFetchData("products");

  useEffect(() => {
    function handleSearch(event) {
      if (event.key === "Enter") {
        const searched = products.filter((product) =>
          product.name.toLowerCase().includes(query),
        );
        setSearchedProducts([...searched]);
        setQuery("");
      }
    }

    window.addEventListener("keydown", handleSearch);

    return function () {
      window.removeEventListener("keydown", handleSearch);
    };
  }, [query, products, setQuery, setSearchedProducts]);

  function clearSearch() {
    setSearchedProducts([]);
    setQuery("");
  }

  return (
    <SearchContext.Provider
      value={{ query, setQuery, searchedProducts, clearSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Search context was used outside of provider");
  }
  return context;
}
