import React from "react";

import InnerBanner from "@/Layout/InnerBanner"
import HotelResultPage from "@/Layout/HotelResult";
import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function HotelResult() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <HotelResultPage/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HotelResult;
