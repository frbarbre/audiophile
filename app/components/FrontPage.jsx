import Hero from "./Hero";
import Categories from "./Categories";
import SpeakerPromo from "./SpeakerPromo";
import SpeakerBanner from "./SpeakerBanner";

export default function FrontPage() {
  return (
    <main>
      <Hero />
      <div className="max-w-[1110px] mx-auto px-6">
        <Categories />
        <SpeakerPromo />
        <SpeakerBanner />
      </div>
    </main>
  );
}
