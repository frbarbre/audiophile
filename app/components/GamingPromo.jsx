import { products } from "../data";
import Button from "./Button";
import Link from "next/link";

export default function GamingPromo() {
  const pc = products[1];

  return (
    <div className="relative bg-grad flex flex-col lg:flex-row items-center rounded-[8px] overflow-y-hidden lg:gap-[128px] lg:justify-center lg:pt-[56px] mb-[24px] md:pb-[32px] lg:mb-[48px]">
      <div className="absolute inset-0 bg-circle-pattern bg-cover bg-top-center bg-no-repeat" />
      <div className="pt-[55px] pb-[32px] md:pt-[52px] md:pb-[64px] lg:p-0 z-10">
        <img
          className="max-w-[410px] w-full"
          src="/workhorse/workhorse-gallery-1.png"
          alt=""
        />
      </div>
      <div className="lg:max-w-[349px] flex justify-center flex-col z-10">
        <h2 className="text-white font-bold text-[36px] leading-[40px] tracking-[1.29px] md:tracking-[2px] md:leading-[58px] uppercase text-center lg:text-left mx-auto lg:mx-0 md:text-[56px]">
          {pc.name}
        </h2>
        <p className="text-[15px] max-w-[280px] mx-auto text-center lg:text-left lg:mx-0 py-[24px] md:pb-[40px] text-white leading-[25px] font-medium">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          href={`gaming/${pc.slug}`}
          className="w-max mx-auto block lg:mx-0 mb-[55px] md:mb-[64px] lg:mb-[0px]"
        >
          <Button
            color={"bg-black hover:bg-dark-gray text-white"}
            text={"See product"}
          />
        </Link>
      </div>
    </div>
  );
}
