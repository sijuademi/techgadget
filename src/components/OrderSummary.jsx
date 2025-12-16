function OrderSummary({ cart = [] }) {
  // make sure cart is an array and price values are numbers
  const total = cart.reduce((acc, cur) => acc + Number(cur?.price || 0), 0);
  // Use Intl.NumberFormat for localized currency formatting
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedTotal = formatter.format(total);

  const pipe =
    (...functions) =>
    (initialValue) =>
      functions.reduce((acc, fn) => fn(acc), initialValue);

  // Building blocks to use for composition
  const double = (x) => 2 * x;
  const triple = (x) => 3 * x;
  const quadruple = (x) => 4 * x;

  // Composed functions for multiplication of specific values
  const multiply6 = pipe(double, triple);
  const multiply9 = pipe(triple, triple);
  const multiply16 = pipe(quadruple, quadruple);
  const multiply24 = pipe(double, triple, quadruple);

  // Usage
  console.log(multiply6(6)); // 36
  multiply9(9); // 81
  multiply16(16); // 256
  multiply24(10); // 240

  return (
    <div className="mb-8 w-min rounded-lg border-2 border-gray-200 px-3 md:w-full">
      <h3 className="text-nowrap font-heading text-lg font-semibold capitalize tracking-wide md:text-xl">
        order summary
      </h3>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-sm capitalize">
        <p>subtotal</p> <p>a</p>
      </div>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-sm capitalize">
        <p>shipping</p> <p>b</p>
      </div>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-sm capitalize">
        <p>tax</p> <p>c</p>
      </div>
      <div className="flex justify-between border-t-2 border-gray-200 py-2 font-heading text-lg font-semibold capitalize md:text-xl">
        <p>total</p> <p>{formattedTotal}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
