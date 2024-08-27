import React from "react";


import InnerBanner from "@/Layout/InnerBanner"
import FlightResultPage from "@/Layout/FlightResult";
import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function Index() {
  return (
    <div>
      <InnerBanner />
      <FlightResultPage /> 
    </div>
  );
}

export default Index;

