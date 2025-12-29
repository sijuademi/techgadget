import { useParams } from "react-router-dom";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import OrderNumber from "../components/OrderNumber";
import { useFetchData } from "../hooks/useFetchData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useState } from "react";
import Loader from "../components/Loader";

function ProductDetails() {
  const [orderNum, setOrderNum] = useState(1);
  // Get the product Id from the URL
  const { id } = useParams();
  // Fetch products from our custom hook
  const { data: products, isLoading } = useFetchData("products");

  const dispatch = useDispatch();

  // Find the specific product
  const product = products.find((p) => p.id === parseInt(id));

  if (isLoading) return <Loader />;
  if (!product) return <h2>No product found</h2>;

  let type = product.category.toLowerCase();
  let displayName = product.name.toLowerCase().split(" ");

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

  const relatedProducts = products
    .filter((e) => e.category === product.category)
    .filter((e) => e.id !== product.id);

  function handleAddToCart() {
    dispatch(addToCart({ ...product, quantity: orderNum }));
    setOrderNum(1);
  }

  function increaseOrderNum() {
    setOrderNum((s) => s + 1);
  }
  function decreaseOrderNum() {
    if (orderNum > 1) setOrderNum((s) => s - 1);
  }

  return (
    <div className="width px-5 pb-12">
      <div className="gap-4 pt-8 md:flex md:flex-row">
        <div className="md:basis-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-72"
          />
        </div>
        <div className="p text-wrap md:basis-1/2">
          <h1 className="font-heading text-2xl font-bold md:text-3xl">
            {product.name}
          </h1>
          <p className="py-2 text-lg font-bold md:text-2xl">${product.price}</p>
          <StarRating />
          <p className="py-2 text-lg font-normal md:text-2xl">
            {product.description}
          </p>
          <h4 className="my-2 text-lg font-medium md:text-2xl">Quantity</h4>
          <OrderNumber
            handleIncr={increaseOrderNum}
            handleDecr={decreaseOrderNum}
          >
            {orderNum}
          </OrderNumber>
          <Button
            className="hover my-4 w-full rounded-lg bg-blue-500 py-2 text-center text-lg font-medium text-orange-50 md:py-3 md:text-2xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="mt-8 gap-8 md:flex">
        <div className="mx-auto mt-4 flex gap-2 overflow-x-scroll md:mx-0 md:basis-1/2">
          {extraImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${product.name} extra ${idx + 1}`}
              className="h-24 w-24 cursor-pointer rounded object-cover md:h-32 md:w-32"
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:basis-1/2 md:overflow-x-scroll">
          <h1 className="font-heading text-xl font-semibold capitalize md:text-2xl">
            related products
          </h1>
          <div className="mt-3 flex flex-col gap-3 md:grid md:grid-flow-col-dense">
            {relatedProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                className="mt-4 flex w-full flex-col gap-3 rounded-lg border-2 border-solid border-gray-400 p-4 md:mt-0 md:w-72"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
