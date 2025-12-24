import OfferBanner from "../components/OfferBanner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Services from "../components/Services";
import NewArrival from "../components/NewArrival";
import MostWanted from "../components/MostWanted";
import LimitedOffer from "../components/Limitedoffer";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <OfferBanner />
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <NewArrival />
      <MostWanted />
      <LimitedOffer />
      <Newsletter />
      <Footer />
    </>
  );
}
