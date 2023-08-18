import Head from "next/head";
import Image from "next/image";
import Hero from "./HomeComponents/Hero";
import ImgExperience from "./HomeComponents/ImgExperience";
import BestIndia from "./HomeComponents/Slider/BestIndia";
import BestEurope from "./HomeComponents/Slider/BestEurope";
import BestThailand from "./HomeComponents/Slider/BestThailand";
import BestIsland from "./HomeComponents/Slider/BestIsland";
import Gridcontainer from "./HomeComponents/Gridcontainer";
import Banners from "./HomeComponents/Banners"
import SlideShow from "./HomeComponents/SlideShow";
import Card from "./HomeComponents/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <ImgExperience />
      <Gridcontainer />
      <Card/>
      <BestIndia />
      <BestEurope />
      <BestThailand />
      <BestIsland />
      <Banners />
      <SlideShow/>
    </>
  );
}
