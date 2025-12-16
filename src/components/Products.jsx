import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

function Products() {
  const { products } = useFetchProducts();

  return (
    <>
      <div className="px-12 py-4 md:mt-6 lg:px-6 xl:px-0">
        <h1 className="mb-8 font-heading text-xl font-bold capitalize text-blue-700 md:text-3xl lg:text-4xl">
          featured products
        </h1>

        {/* grid: 1 column mobile, 2 on md (tablet), 3 on lg (laptop) */}
        <div className="grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              className="flex h-full w-full flex-col rounded-lg border-2 border-solid border-gray-400 p-4"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
