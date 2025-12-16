import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ProductCard({ product, className }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div onClick={handleCardClick} className={className}>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto my-6 h-64 object-contain"
      />

      <div className="flex-1">
        <p className="text-pretty text-lg font-bold">{product.name}</p>
      </div>
      <p className="my-2 text-lg font-bold">${product.price}</p>

      <Button className="hover w-full rounded-lg border-2 border-gray-500 py-1 text-center text-lg font-medium">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
