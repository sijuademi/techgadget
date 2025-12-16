import { useState } from "react";
import Button from "./Button";
import FontAwesome from "./FontAwesome";

function OrderNumber() {
  const [orderNum, setOrderNum] = useState(1);

  function increaseOrderNum() {
    setOrderNum((s) => s + 1);
  }
  function decreaseOrderNum() {
    if (orderNum > 1) setOrderNum((s) => s - 1);
  }
  return (
    <div className="flex h-min w-min rounded-md border-2 border-solid border-gray-300">
      <Button
        className="ease px-2 py-1 transition-colors duration-300 hover:bg-slate-200"
        onClick={decreaseOrderNum}
      >
        <FontAwesome type="solid" size="md">
          minus
        </FontAwesome>{" "}
      </Button>
      <p className="border-x-2 px-4 py-1 text-lg">{orderNum}</p>
      <Button
        className="ease px-2 py-1 transition-colors duration-300 hover:bg-slate-200"
        onClick={increaseOrderNum}
      >
        <FontAwesome type="solid" size="md">
          plus
        </FontAwesome>{" "}
      </Button>
    </div>
  );
}

export default OrderNumber;
