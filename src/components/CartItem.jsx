import OrderNumber from "./OrderNumber";
import FontAwesome from "./FontAwesome";
import Button from "./Button";
function CartItem({ item }) {
  return (
    <div className="justify-between border-b-2 border-gray-300 py-2 md:flex md:py-6">
      <div className="flex justify-between text-right md:justify-normal md:gap-6 md:text-left lg:gap-14">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 lg:h-32 lg:w-32"
        />
        <div className="flex flex-col justify-center gap-y-2 font-heading text-sm font-semibold tracking-wide md:text-base lg:text-lg">
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4 md:mt-0">
        <OrderNumber />
        <Button className="ease transition-colors duration-300 hover:text-slate-200 lg:text-2xl">
          <FontAwesome type="solid" size="md">
            trash
          </FontAwesome>
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
