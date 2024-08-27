import React from "react";

import InnerBanner from "@/Layout/InnerBanner";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import HotelDetailPage from "@/Layout/HotelDetail";

function HotelDetail() {
  return (
    <div>
      <InnerBanner />
      <HotelDetailPage />
    </div>
  );
}

export default HotelDetail;
