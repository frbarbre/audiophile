import { products } from "../data";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  const headphone = products[3];

  return (
    <div className="w-full relative h-full">
      <img
        src={"/home/desktop/image-hero.jpg"}
        alt="HeroImage"
        className="w-full hidden lg:block max-h-[729px] object-cover object-center"
      />
      <img
        src={"/home/tablet/image-hero.jpg"}
        alt="HeroImage"
        className="w-full hidden md:block lg:hidden max-h-[729px] object-cover object-center"
      />
      <img
        src={"/home/mobile/image-hero.jpg"}
        alt="HeroImage"
        className="w-full md:hidden lg:hidden max-h-[600px] object-cover"
      />
      <div className="absolute inset-0 max-w-[1174px] mx-auto flex items-center object-center px-[39px] lg:px-8 lg:pt-[89px]">
        <article className="w-full text-center lg:text-left">
          <h2 className="tracking-[10px] uppercase text-white text-[14px] pb-[16px] md:pb-[24px] opacity-50">
            New product
          </h2>
          <h1 className="font-bold text-white text-[36px] uppercase max-w-[328px] md:max-w-[396px] lg:max-w-[396px] md:text-[56px] lg:text-[56px] mx-auto lg:mx-0 pb-[24px]">
            {headphone.name}
          </h1>
          <p className="max-w-[349px] mx-auto lg:mx-0 font-medium text-[15px] leading-[25px] text-white opacity-75 pb-[24px] md:pb-[40px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href={`/headphones/${headphone.slug}`}
            className="w-max mx-auto lg:mx-0 block"
          >
            <Button
              color={"bg-orange hover:bg-orange-pale text-white"}
              text={"See product"}
            />
          </Link>
        </article>
      </div>
    </div>
  );
}
