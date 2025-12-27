import Button from "./Button";
import FontAwesome from "./FontAwesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function OrderNumber({ children, handleIncr, handleDecr }) {
  return (
    <div className="flex h-min w-min rounded-md border-2 border-solid border-gray-300">
      <Button
        className="ease px-2 py-1 transition-colors duration-300 hover:bg-slate-200"
        onClick={handleDecr}
      >
        <FontAwesome icon={faMinus} size="md" />{" "}
      </Button>
      <p className="border-x-2 px-4 py-1 text-lg">{children}</p>
      <Button
        className="ease px-2 py-1 transition-colors duration-300 hover:bg-slate-200"
        onClick={handleIncr}
      >
        <FontAwesome icon={faPlus} size="md" />
      </Button>
    </div>
  );
}

export default OrderNumber;
