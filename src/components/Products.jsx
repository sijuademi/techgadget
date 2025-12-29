import { useFetchData } from "../hooks/useFetchData";
import Loader from "./Loader";
import { useFilter } from "../context/FilterContext";
import ProductCard from "./ProductCard";
import { useMemo } from "react";
import { useSearch } from "../context/SearchContext";

function Products() {
  const { data: products, isLoading, error } = useFetchData("products");
  const { selectedCategory } = useFilter();
  const { searchedProducts } = useSearch();

  // Combine both search and category filters in one memoized calculation
  const displayedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter first
    if (selectedCategory && products.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    // Apply search filter (takes precedence if search is active)
    if (searchedProducts.length > 0) {
      filtered = searchedProducts.filter((product) =>
        filtered.some((p) => p.id === product.id),
      );
    }

    return filtered;
  }, [selectedCategory, products, searchedProducts]);

  return (
    <>
      {/* Display the loader */}
      {isLoading && <Loader />}

      {/* Handle error */}
      {!isLoading && error && (
        <div className="mt-12 text-center text-red-600">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="px-12 py-4 md:mt-6 lg:px-6 xl:px-0">
          <h1 className="mb-8 font-heading text-xl font-bold capitalize text-blue-700 md:text-3xl lg:text-4xl">
            featured products
          </h1>

          {displayedProducts.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-lg text-gray-500">
                {selectedCategory
                  ? `No products found in ${selectedCategory}`
                  : "No products found"}
              </p>
            </div>
          ) : (
            /* grid: 1 column mobile, 2 on md (tablet), 3 on lg (laptop) */
            <div className="grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  className="flex h-full w-full flex-col rounded-lg border-2 border-solid border-gray-400 p-4"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Products;
