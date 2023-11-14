import { products } from "../data";
import Button from "./Button";
import Link from "next/link";

export default function SpeakerBanner() {
  const speaker = products[4];

  return (
    <div className="w-full bg-speaker-banner-mobile md:bg-speaker-banner-tablet lg:bg-speaker-banner-desktop bg-cover bg-right-top bg-no-repeat rounded-[9px] flex flex-col justify-center gap-[32px] pl-[24px] md:pl-[62px] lg:pl-[95px] h-[327px] md:h-[320px] ">
      <h2 className="uppercase font-bold text-[28px] tracking-[2px]">{speaker.name}</h2>
      <Link href={`/speakers/${speaker.slug}`} className="w-max">
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
