import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";

function Cart() {
  const { cartItems, totalAmount } = useSelector((store) => store);

  return (
    <div className="mx-6 pt-10 md:mx-12">
      <div className="mx-auto flex flex-col gap-6 md:flex-row">
        <div className="order-2 md:basis-1/4">
          <OrderSummary cart={cartItems} totalAmount={totalAmount} />
        </div>

        <div className="basis-3/4">
          <h1 className="pb-3 font-heading text-lg font-bold capitalize tracking-wide md:text-3xl">
            {cartItems.length < 1
              ? "you're yet to add items to your cart"
              : `your shopping cart (${cartItems.length} items)`}
          </h1>
          <div className="border-t-2 border-gray-300">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12 flex w-full justify-center md:mt-8 md:w-[70%]">
        <Button className="hover mx-auto w-full max-w-96 rounded-xl bg-blue-500 p-3 py-2 text-xl font-semibold capitalize text-white">
          checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
