"use client";

import { useRouter, usePathname } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <p
      className={`${pathname === "/checkout" ? "md:pt-[48px] lg:pb-[38px]" : "md:pt-[33px] lg:pb-[56px]"} md:pb-[24px] pb-[24px] pt-[16px] lg:pt-[79px] block text-[15px] opacity-50 leading-[25px] w-max hover:text-orange hover:underline transition-all hover:opacity-100 cursor-pointer`}
      onClick={() => router.back()}
    >
      Go Back
    </p>
  );
}
