import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import FontAwesome from "../components/FontAwesome";
import Button from "../components/Button";

function ProductDetails() {
  // Get the product Id from the URL
  const { id } = useParams();
  // Import product from our custom hook
  const { products } = useFetchProducts();
  // Sort for the specific product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>No product found</h2>;

  let type = product.category.toLowerCase();
  let displayName = product.name.toLowerCase().split(" ");
  console.log(displayName, type);
  switch (type) {
    case "wearables":
      if (displayName.includes("smart")) {
        type = "smartwatch";
      } else {
        type = "wristwatch";
      }
      break;
    case "audio":
      {
        type = "headphones";
      }
      break;
    case "accessories":
      type = "keyboard";
      break;
    case "electronics":
      if (displayName.includes("monitor")) {
        type = "monitor";
      } else {
        type = "tv";
      }
      break;
    default:
      type = product.category;
  }
  // build extra image paths (adjust path to match your public/static layout)
  const extraImages = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
  ].map((num) => `/${type.toLowerCase()}/extras/${num}.jpg`);
  console.log(extraImages);

  return (
    <div className="flex-row gap-4 px-5 md:flex">
      <div className="md:basis-1/2">
        <img src={product.image} alt={product.name} className="mx-auto h-72" />
      </div>
      <div className="text-wrap md:basis-1/2">
        <h1 className="font-heading text-2xl font-bold md:text-4xl">
          {product.name}
        </h1>
        <p className="text-lg font-bold md:text-2xl">${product.price}</p>
        <p className="text-lg font-normal md:text-2xl">{product.description}</p>
        <h4 className="text-lg font-medium md:text-2xl">Quantity</h4>
        <div className="flex">
          <span>
            <FontAwesome type="solid">minus</FontAwesome>{" "}
          </span>
          <span>1</span>
          <span className="">
            <FontAwesome type="solid">plus</FontAwesome>{" "}
          </span>
        </div>
        <Button className="hover w-full rounded-lg bg-orange-600 py-2 text-center text-lg font-medium text-orange-50 md:py-3 md:text-2xl">
          Add to Cart
        </Button>

        <div className="mt-4 flex flex-wrap gap-2">
          {extraImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${product.name} extra ${idx + 1}`}
              className="h-16 w-16 cursor-pointer rounded object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
