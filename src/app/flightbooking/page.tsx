import React from "react";
import FlightBookingPage from "@/Layout/FlightBooking";
import InnerBannerHd from "@/Layout/InnerBannerHeading";
import Image from "react-bootstrap/Image";

function FlightBooking() {
  return (
    <div>
      <InnerBannerHd
        headingImg={<Image src="/assets/security_icon.png" alt="" />}
        headingText=" Secure booking "
        subheadingText="only takes a few minutes!"
      />
      <FlightBookingPage />
    </div>
  );
}

export default FlightBooking;
