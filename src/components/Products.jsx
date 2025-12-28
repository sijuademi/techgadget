import { useFetchData } from "../hooks/useFetchData";
import Loader from "./Loader";
import { useFilter } from "../context/FilterContext";
import ProductCard from "./ProductCard";

function Products() {
  const { data: products, isLoading, error } = useFetchData("products");
  const { selectedCategory } = useFilter();

  // Filter products based on selected category
  const displayedProducts =
    selectedCategory && products.length > 0
      ? products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase(),
        )
      : products;

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

          {/* grid: 1 column mobile, 2 on md (tablet), 3 on lg (laptop) */}
          <div className="grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                className="flex h-full w-full flex-col rounded-lg border-2 border-solid border-gray-400 p-4"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
