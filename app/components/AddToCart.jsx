import { useCartStore } from "../store";
import { useState } from "react";
import Button from "./Button";

export default function AddToCart({ productArray }) {
  const submitToCart = useCartStore((state) => state.submitToCart);

  const [count, setCount] = useState(1);

  function handleSubmit() {
    submitToCart(productArray, count);
    setCount(1);
  }

  function handleChange(value) {
    setCount(count + value);
  }

  return (
    <div className="flex items-center gap-[16px] flex-wrap">
      <div className="flex gap-[20px] items-center justify-between px-[15.5px] w-[120px] h-[48px] bg-grey">
        <h2
          className="opacity-25 font-bold text-[13px] tracking-[1px] hover:text-orange hover:opacity-100 transition-all cursor-pointer"
          onClick={count === 1 ? null : () => handleChange(-1)}
        >
          -
        </h2>
        <p className="font-bold text-[13px] tracking-[1px]">{count}</p>
        <h2
          className="opacity-25 font-bold text-[13px] tracking-[1px] hover:text-orange hover:opacity-100 transition-all cursor-pointer"
          onClick={() => handleChange(1)}
        >
          +
        </h2>
      </div>
      <div onClick={handleSubmit}>
        <Button
          text={"add to cart"}
          color={"text-white bg-orange hover:bg-orange-pale"}
        />
      </div>
    </div>
  );
}
