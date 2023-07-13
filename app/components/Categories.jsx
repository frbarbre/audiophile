"use client";

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function Categories() {
  return (
    <div className="md:flex lg:flex mt-20 md:justify-between z-1">
      {categories.map((category) => (
        <div
          key={nanoid()}
          className="bg-grey mb-[60px] rounded-lg p-10 pt-20 relative md:justify-between md:w-[32%]"
        >
          <Link href={`/${category.title}`} key={nanoid()}>
            <Image
              src={category.image}
              width={160}
              height={122}
              alt="Logo"
              className="absolute justify-center top-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-100%]"
            />
            <p className="uppercase text-[15px] lg:text-[18px] text-center mt-5 font-bold">
              {category.title}
            </p>
            <div className="flex justify-center items-center mt-[20px]">
              <p className="transition-all hover:text-orange mr-[10px] text-[13px] font-bold">
                SHOP
              </p>
              <Image
                src="/shared/desktop/icon-arrow-right.svg"
                width={20}
                height={20}
                alt="Logo"
                onClick={(e) => setMenu(!menu)}
                className="z-1 h-[15px] w-[10px] items-center"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
