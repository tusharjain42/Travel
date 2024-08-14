
import React from "react";
import HomeBanner from "@/Layout/HomeBanner";
import Faq from "@/Layout/Home/Components/Faq";
import AboutUsSec from "./Components/AboutUsSec";
import HopSlider from "./Components/HopSlider";
import DestinationSlider from "./Components/DestinationSlider";
import Offer from "./Components/Offer";

function HomePage() {
  return (
    <div>
      <HomeBanner />
      <HopSlider />
      <AboutUsSec />
      <DestinationSlider />
      <Offer />
      <Faq />
    </div>
  );
}

export default HomePage;
