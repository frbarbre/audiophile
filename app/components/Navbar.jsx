"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants";
import { nanoid } from "nanoid";
import { useStore } from "../store";
import useFromStore from "../hooks/useFromStore";
import { useCartStore } from "../store";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const pathname = usePathname();

  const pathSplit = pathname.split("/");
  const categoryPath = "/" + pathSplit[1];

  const succes = useStore((store) => store.succes);

  const cart = useFromStore(useCartStore, (state) => state.cart);

  let totalItems = 0;

  if (cart) {
    totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  return (
    <div className={`${succes ? "cursor-not-allowed" : ""} relative`}>
      <div
        className={`${succes ? "pointer-events-none" : ""} lg:px-0 ${
          pathname === "/" ? "" : "bg-black"
        }`}
      >
        <div
          className={`flex justify-between items-center px-[30px] py-8 md:max-w-[1174px] md:mx-auto z-50 relative ${
            menu ? "bg-black lg:bg-transparent" : ""
          }`}
        >
          <Image
            src="/shared/tablet/icon-hamburger.svg"
            width={16}
            height={16}
            alt="Logo"
            onClick={(e) => {
              setMenu(!menu);
              setOpenCart(false);
            }}
            className="lg:hidden cursor-pointer"
          />
          <div className="md:w-full md:pl-[42px] lg:w-max lg:pl-0">
            <Link href={"/"} className="w-max block">
              <Image
                src="/shared/desktop/logo.svg"
                width={143}
                height={200}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="gap-x-8 text-white hidden lg:flex uppercase">
            {navLinks.map((link) => (
              <Link
                key={nanoid()}
                href={link.path}
                className={`font-bold hover:text-orange transition-all ${
                  categoryPath === link.path ? "text-orange" : ""
                } ${
                  pathname === link.path ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <Image
              src="/shared/desktop/icon-cart.svg"
              width={20}
              height={23}
              alt="Logo"
              className="cursor-pointer"
              onClick={() => {
                setOpenCart(!openCart);
                setMenu(false);
              }}
            />
            {totalItems !== 0 && (
              <div className="absolute top-[-12px] right-[-10px] bg-orange text-white aspect-square rounded-full w-[16px] h-[16px] flex items-center justify-center">
                <p className="text-[10px] font-medium">{totalItems}</p>
              </div>
            )}
          </div>
        </div>
        <div className="border-b-[1px] border-[#FFF] opacity-[0.2]"></div>
        {menu && (
          <div
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <BurgerMenu />
            <div className="fixed inset-0 bg-black opacity-40 z-20"></div>
          </div>
        )}
        <div className="relative max-w-[1174px] mx-auto">
          {openCart && (
            <div className="px-6 mt-[24px] absolute md:w-[377px] md:right-14 w-full">
              <Cart openCart={openCart} setOpenCart={setOpenCart} />
              <div
                onClick={() => {
                  setOpenCart(!openCart);
                }}
                className="fixed inset-0 bg-black opacity-40 z-20"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
