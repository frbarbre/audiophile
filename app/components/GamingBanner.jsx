import { products } from "../data";
import Button from "./Button";
import Link from "next/link";

export default function GamingBanner() {
  const pc = products[2];

  return (
    <div className="w-full bg-speaker-banner-mobile md:bg-speaker-banner-tablet md:bg-speaker-banner-desktop bg-cover bg-right bg-no-repeat rounded-[9px] flex flex-col justify-center gap-[32px] md:pl-[62px] lg:pl-[95px] md:h-[320px] bg-[#E5E5E5]">
      <img
        src="/home/beast-promo-sm.png"
        alt="beast-promo"
        className="object-contain md:hidden rounded-t-[9px]"
      />
      <h2 className="uppercase font-bold text-[28px] tracking-[2px] text-center md:text-left">
        {pc.name}
      </h2>
      <Link
        href={`/gaming/${pc.slug}`}
        className="w-max pb-[55px] md:pb-0 mx-auto md:mx-0"
      >
        <Button
          color={
            "border-[1px] border-black hover:bg-black text-black hover:text-white"
          }
          text={"See Product"}
        />
      </Link>
    </div>
  );
}
