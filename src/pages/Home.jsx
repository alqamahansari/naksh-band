import Hero from "../components/home/Hero";
import WhyBanarasi from "../components/home/WhyBanarasi";
import WhyNakshBand from "../components/home/WhyNakshBand";
import WeavingProcess from "../components/home/WeavingProcess";
import ZariCertification from "../components/home/ZariCertification";
import CollectionsPreview from "../components/home/CollectionsPreview";
import OurStores from "../components/home/OurStores";
import HowToBuy from "../components/home/HowToBuy";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyBanarasi />
      <WhyNakshBand />
      <WeavingProcess />
      <ZariCertification />
      <CollectionsPreview />
      <OurStores />
      <HowToBuy />
    </>
  );
}
