"use client";

import { useCartStore } from "../store";
import useFromStore from "../hooks/useFromStore";
import { nanoid } from "nanoid";
import CheckoutItem from "./CheckoutItem";
import Button from "./Button";
import { useStore } from "../store";

export default function CheckoutSummary() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const setSucces = useStore((store) => store.setSucces);

  let totalPrice = 0;
  let shipping = 50;
  let vat = 0;
  let allIncluded = 0;

  if (cart) {
    totalPrice = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    vat = (totalPrice / 100) * 20;
    vat = vat.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    shipping = totalPrice === 0 ? 0 : 50

    allIncluded = totalPrice + shipping;
  }

  return (
    <div className="bg-white rounded-[8px] w-full max-w-[800px] flex flex-col py-[32px] px-[24px] md:px-[33px]">
      <h2 className="uppercase font-bold text-[18px] tracking-[1.29px] pb-[31px]">
        Summary
      </h2>
      <div className="flex flex-col gap-[24px]">
        {cart?.map((item) => (
          <CheckoutItem key={nanoid()} {...item} />
        ))}
      </div>
      <div className="py-[32px] gap-[8px]">
        <div className="flex items-center justify-between">
          <h2 className="uppercase opacity-50 leading-[25px] text-[15px] font-medium">
            Total
          </h2>
          <h3 className="text-[18px] font-bold">
            $ {totalPrice.toLocaleString()}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="uppercase opacity-50 leading-[25px] text-[15px] font-medium">
            Shipping
          </h2>
          <h3 className="text-[18px] font-bold">$ {shipping}</h3>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="uppercase opacity-50 leading-[25px] text-[15px] font-medium">
            Vat (included)
          </h2>
          <h3 className="text-[18px] font-bold">$ {vat}</h3>
        </div>
        <div className="flex items-center justify-between pt-[16px]">
          <h2 className="uppercase opacity-50 leading-[25px] text-[15px] font-medium">
            Grand total
          </h2>
          <h3 className="text-[18px] font-bold text-orange">
            $ {allIncluded.toLocaleString()}
          </h3>
        </div>
      </div>
      {cart?.length === 0 ? (
        <Button
          text={"cart is empty"}
          color={"cursor-not-allowed text-white bg-dark-gray w-full"}
        />
      ) : (
        <div onClick={() => setSucces(true)}>
          <Button
            text={"continue & pay"}
            color={"w-full bg-orange hover:bg-orange-pale text-white"}
          />
        </div>
      )}
    </div>
  );
}
