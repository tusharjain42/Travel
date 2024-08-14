import React from "react";
import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import FlightBookingPage from "@/Layout/FlightBooking";
import InnerBannerHd from "@/Layout/InnerBannerHeading";
import Image from "react-bootstrap/Image";

function FlightBooking() {
  return (
    <div>
      <Header />
      <InnerBannerHd
        headingImg={<Image src="/assets/security_icon.png" alt="" />}
        headingText=" Secure booking "
        subheadingText="only takes a few minutes!"
      />
      <FlightBookingPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default FlightBooking;
