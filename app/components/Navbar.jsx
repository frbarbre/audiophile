"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants";
import { nanoid } from "nanoid";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={`lg:px-0 ${pathname === "/" ? "" : "bg-black"}`}>
      <div
        className={`flex justify-between items-center px-[30px] py-8 md:max-w-[1110px] md:mx-auto z-50 relative ${
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
                pathname === link.path ? "text-orange cursor-default" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Image
          src="/shared/desktop/icon-cart.svg"
          width={20}
          height={23}
          alt="Logo"
          className="cursor-pointer"
          onClick={(e) => {
            setOpenCart(!openCart);
            setMenu(false);
          }}
        />
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
      <div className="relative max-w-[1110px] mx-auto">
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
  );
}
