import Hero from "./Hero";
import Categories from "./Categories";
import SpeakerPromo from "./SpeakerPromo";
import SpeakerBanner from "./SpeakerBanner";
import EarbudPromo from "./EarbudPromo";
import Pitch from "./Pitch";

export default function FrontPage() {
  return (
    <main>
      <Hero />
      <div className="max-w-[1174px] mx-auto px-6">
        <Categories />
        <SpeakerPromo />
        <SpeakerBanner />
        <EarbudPromo />
        <Pitch />
      </div>
    </main>
  );
}
