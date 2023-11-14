import Hero from "./Hero";
import Categories from "./Categories";
import GamingPromo from "./GamingPromo";
import GamingBanner from "./GamingBanner";
import EarbudPromo from "./EarbudPromo";
import Pitch from "./Pitch";

export default function FrontPage() {
  return (
    <main>
      <Hero />
      <div className="max-w-[1174px] mx-auto px-6">
        <div className="mb-[60px] md:mb-[36px] lg:mb-[108px] mt-[92px] md:mt-[148px] lg:mt-[200px]">
          <Categories />
        </div>
        <GamingPromo />
        <GamingBanner />
        <EarbudPromo />
        <Pitch />
      </div>
    </main>
  );
}
