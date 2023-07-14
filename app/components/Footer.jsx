"use client";

import { navLinks, socials } from "../constants";
import Link from "next/link";
import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const pathSplit = pathname.split("/") 
  const categoryPath = "/" + pathSplit[1]
  return (
    <footer className="bg-near-black relative z-0">
      <div className="max-w-[1174px] mx-auto px-8 relative pt-[52px] md:pt-[60px] lg:pt-[75px] pb-[38px] md:pb-[46px] lg:pb-[48px]">
        <article className="flex flex-col lg:flex-row lg:justify-between items-center md:items-start">
          <img src="/shared/desktop/logo.svg" alt="logo" />
          <div className="flex gap-[16px] flex-col md:flex-row md:gap-[34px] text-center md:text-left py-[48px] md:py-[32px] lg:pt-0 lg:pb-[36px]">
            {navLinks.map((link) => (
              <Link key={nanoid()} href={link.path}>
                <h2 className={`uppercase text-[13px] tracking-[2px] leading-[25px] font-bold hover:text-orange transition-all ${
                categoryPath === link.path ? "text-orange" : "text-white"
              } ${pathname === link.path ? "cursor-default" : "cursor-pointer"}`}>
                  {link.title}
                </h2>
              </Link>
            ))}
          </div>
        </article>

        <article className="flex justify-between items-end pb-[48px] md:pb-[80px] lg:pb-[56px]">
          <p className="text-white opacity-50 text-[15px] font-medium leading-[25px] text-center md:text-left max-w-[327px] mx-auto md:mx-0 md:max-w-[689px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="hidden lg:flex gap-[16px]">
            {socials.map((some) => (
              <img key={nanoid()} src={some.image} alt={some.image} />
            ))}
          </div>
        </article>

        <article className="flex justify-between flex-col md:flex-row">
          <p className="text-center md:text-left font-bold text-[15px] opacity-50 leading-[25px] text-white">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="lg:hidden flex justify-center md:justify-start gap-[16px] pt-[48px] md:pt-0">
            {socials.map((some) => (
              <img key={nanoid()} src={some.image} alt={some.image} />
            ))}
          </div>
        </article>

        <div className="w-[101px] h-[4px] bg-orange absolute top-0 left-[50%] translate-x-[-50%] md:left-8 md:translate-x-0" />
      </div>
    </footer>
  );
}
