"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Categories from "./Categories";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={`lg:px-0 ${pathname === "/" ? "" : "bg-black"}`}>
      {menu && (
        <div
          className="lg:hidden absolute bg-white rounded-lg w-[100%] z-30"
          onClick={() => setMenu(!menu)}
        >
          <div className="px-6 mt-[150px]">
            <Categories />
          </div>
        </div>
      )}
      <div
        className={`flex justify-between items-center px-[30px] py-8 lg:max-w-[1110px] lg:mx-auto z-50 relative ${
          menu ? "bg-black lg:bg-transparent" : ""
        }`}
      >
        <Image
          src="/shared/tablet/icon-hamburger.svg"
          width={16}
          height={16}
          alt="Logo"
          onClick={(e) => setMenu(!menu)}
          className="lg:hidden"
        />
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo.svg"
            width={143}
            height={200}
            alt="Logo"
          />
        </Link>
        <div className="gap-x-8 text-white hidden lg:flex ">
          <Link href="/">HOME</Link>
          <Link href="/headphones">HEADPHONES</Link>
          <Link href="/speakers">SPEAKERS</Link>
          <Link href="/earphones">EARPHONES</Link>
        </div>
        <Image
          src="/shared/desktop/icon-cart.svg"
          width={20}
          height={23}
          alt="Logo"
        />
      </div>
      <div className="border-b-[1px] border-[#FFF] opacity-[0.20000000298023224]"></div>
    </div>
  );
}
