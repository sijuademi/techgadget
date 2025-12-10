import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

function Products() {
  const { isLoading, error, products } = useFetchProducts();

  return (
    <div className="px-12 py-4 md:mt-6 lg:px-6 xl:px-0">
      <h1 className="font-heading mb-8 text-xl font-bold capitalize text-blue-700 md:text-3xl lg:text-4xl">
        featured products
      </h1>

      {/* grid: 1 column mobile, 2 on md (tablet), 3 on lg (laptop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-12">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
