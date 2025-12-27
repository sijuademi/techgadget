function OrderSummary({ totalAmount = 0 }) {
  // Use Intl.NumberFormat for localized currency formatting
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const shippingFee = Math.ceil((totalAmount / 100) * 25);
  const calcTax = (amt) => (totalAmount > 1000 ? amt * 0.2 : amt * 0.1);

  const tax = Math.ceil(calcTax(totalAmount));

  const totalPayable = Number(totalAmount) + tax + shippingFee;
  const formattedTotal = formatter.format(totalPayable);

  console.log(typeof tax, typeof shippingFee);

  return (
    <div className="mb-8 w-64 rounded-lg border-2 border-gray-200 px-3 md:w-full">
      <h3 className="text-nowrap py-2 font-heading text-lg font-semibold capitalize tracking-wide md:text-xl">
        order summary
      </h3>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-lg capitalize">
        <p>subtotal</p> <p className="font-semibold">${totalAmount}</p>
      </div>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-lg capitalize">
        <p>shipping</p>{" "}
        <p className="font-semibold">${shippingFee.toFixed(2)}</p>
      </div>
      <div className="md:text-md flex justify-between border-t-2 border-gray-200 py-2 text-lg capitalize">
        <p>tax</p> <p className="font-semibold">${tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between border-t-2 border-gray-200 py-2 font-heading text-lg font-semibold capitalize md:text-xl">
        <p>total</p> <p>{formattedTotal}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
