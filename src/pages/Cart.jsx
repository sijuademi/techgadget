import useFetchCart from "../hooks/useFetchCart";
import Loader from "../components/Loader";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function Cart() {
  const { cart, isLoading } = useFetchCart();
  console.log(cart);
  return (
    <div className="mx-6 pt-10 md:mx-12">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto flex flex-col gap-6 md:flex-row">
          <div className="order-2 md:basis-1/4">
            <OrderSummary cart={cart} />
          </div>

          <div className="basis-3/4">
            <h1 className="pb-3 font-heading text-lg font-bold capitalize tracking-wide md:text-3xl">
              your shopping cart ({cart.length} items)
            </h1>
            <div className="border-t-2 border-gray-300">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
