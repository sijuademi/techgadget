import Button from "./Button";

function ProductCard({ product }) {
  return (
    <div className="flex h-full w-full flex-col rounded-lg border-2 border-solid border-gray-400 p-4 transition-colors duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto my-6 h-64 object-contain"
      />

      <div className="flex-1">
        <p className="text-pretty text-lg font-medium">{product.name}</p>
      </div>
      <p className="my-2 text-lg font-medium">${product.price}</p>

      <Button className="hover w-full rounded-lg border-2 border-gray-500 py-1 text-center text-lg font-medium">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
