import { useStore } from "../store";
import Link from "next/link";
import Button from "./Button";
import { useCartStore } from "../store";
import Image from "next/image";
import useFromStore from "../hooks/useFromStore";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function SuccesBanner() {
  const setSucces = useStore((store) => store.setSucces);
  const emptyCart = useCartStore((state) => state.emptyCart);

  const cart = useFromStore(useCartStore, (state) => state.cart);
  const [showMore, setShowMore] = useState(false);

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

    allIncluded = totalPrice + shipping;
  }

  function handleClick() {
    setSucces(false);
    emptyCart();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-opaque z-20">
      <div className="bg-white max-w-[540px] w-full mx-6 p-8 md:p-12 rounded-[8px] relative z-50">
        <Image
          width={64}
          height={64}
          alt="checkmark"
          src="/shared/desktop/icon-check-mark.svg"
          className="pb-[23px] md:pb-[33px]"
        />
        <h2 className="text-[24px] tracking-[0.86px] leading-[28px] font-bold pb-[16px] md:pb-[24px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">
          THANK YOU <br />
          FOR YOUR ORDER
        </h2>
        <p className="text-[15px] opacity-50 leading-[25px] font-medium pb-[24px] md:pb-[33px[">
          You will receive an email confirmation shortly.
        </p>
        <div className="md:flex">
          {cart && (
            <div className="bg-grey rounded-t-lg md:rounded-l-lg p-6 mt-[16px] md:mt-[0px] md:rounded-tr-none md:w-[60%]">
              {showMore ? (
                <div>
                  {cart?.map((cart) => (
                    <div
                      key={nanoid()}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <Image
                          src={cart.image.mobile}
                          width={64}
                          height={64}
                          alt="Logo"
                          className="rounded-lg mr-[10px]"
                        />
                        <div className="font-bold">
                          <p className="">{cart.shortName}</p>
                          <p className="opacity-50">
                            $ {cart?.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="opacity-50 font-bold">x{cart?.quantity}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={cart[0]?.image.mobile}
                      width={64}
                      height={64}
                      alt="Logo"
                      className="rounded-lg mr-[10px]"
                    />
                    <div className="font-bold">
                      <p className="">{cart[0]?.shortName}</p>
                      <p className="opacity-50">
                        $ {cart[0]?.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="opacity-50 font-bold">x{cart[0]?.quantity}</p>
                </div>
              )}
              <div className="border-b border-black opacity-[0.079]"></div>
              <p
                className="font-bold text-center opacity-50 mb-[25px] md:mb-[0px] mt-[12px] cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore
                  ? "Show less"
                  : `and ${cart?.length - 1} other item${
                      cart?.length - 1 === 1 ? "" : "s"
                    }`}
              </p>
            </div>
          )}
          <div className="bg-black rounded-b-lg md:rounded-r-lg md:rounded-bl-none md:w-[40%] text-white md:flex md:justify-center md:items-center">
            <div>
              <p className="opacity-50 px-5 pt-5 mb-[8px]">GRAND TOTAL</p>
              <h3 className="text-[18px] font-bold px-5 pb-[18px]">
                $ {allIncluded.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-[23px] md:mt-[46px]">
          <Link href={"/"} onClick={handleClick}>
            <Button
              text={"back to home"}
              color={"w-full bg-orange hover:bg-orange-pale text-white"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
