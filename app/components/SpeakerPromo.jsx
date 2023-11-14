import { products } from "../data";
import Button from "./Button";
import Link from "next/link";

export default function SpeakerPromo() {
  const speaker = products[5];

  return (
    <div className="bg-orange bg-circle-pattern bg-cover bg-top-center bg-no-repeat flex flex-col lg:flex-row items-center rounded-[8px] overflow-y-hidden lg:gap-[128px] lg:justify-center lg:pt-[56px] mb-[24px] md:mb-[32px] lg:mb-[48px]">
      <div className="pt-[55px] pb-[32px] md:pt-[52px] md:pb-[64px] lg:p-0 lg:translate-y-4">
        <img
          className="md:hidden max-w-[172px] mx-auto"
          src="/home/mobile/image-speaker-zx9.png"
          alt=""
        />
        <img
          className="hidden md:flex lg:hidden max-w-[197px] mx-auto"
          src="/home/tablet/image-speaker-zx9.png"
          alt=""
        />
        <img
          className="hidden lg:block max-w-[410px]"
          src="/home/desktop/image-speaker-zx9.png"
          alt=""
        />
      </div>
      <div className="lg:max-w-[349px]">
        <h2 className="text-white font-bold text-[36px] leading-[40px] tracking-[1.29px] md:tracking-[2px] md:leading-[58px] uppercase text-center lg:text-left max-w-[200px] md:max-w-[261px] mx-auto lg:mx-0 md:text-[56px]">{speaker.name}</h2>
        <p className="text-[15px] max-w-[280px] mx-auto text-center lg:text-left lg:mx-0 py-[24px] md:pb-[40px] text-white leading-[25px] font-medium">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link href={`speakers/${speaker.slug}`} className="w-max mx-auto block lg:mx-0 mb-[55px] md:mb-[64px] lg:mb-[124px]">
          <Button
            color={"bg-black hover:bg-dark-gray text-white"}
            text={"See product"}
          />
        </Link>
      </div>
    </div>
  );
}
