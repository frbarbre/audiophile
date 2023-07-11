"use client";

import { products } from "../data";
import { usePathname } from "next/navigation";
import { useCartStore } from "../store";
import { useState } from "react";

export default function ProductPage() {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const productPath = splitPathname[2];
  const productArray = products.find((product) => product.slug === productPath);
  const submitToCart = useCartStore((state) => state.submitToCart);

  const [count, setCount] = useState(1);

  function handleSubmit() {
    submitToCart(productArray, count)
    setCount(1)
  }

  return (
    <div>
      <div>{productArray.name}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={handleSubmit}>
        Add to cart
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
    </div>
  );
}
