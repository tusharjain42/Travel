
import React from "react";
// import AboutUsSec from "../../Layout/Home/Components/AboutUsSec";
import AboutUsPage from "@/Layout/AboutUs"
import InnerBannerHd from "../../Layout/InnerBannerHeading";

function HomePage() {
  return (
    <div>
    <InnerBannerHd
        headingImg=""
        headingText=" About Us " 
        subheadingText=""
      />
      {/* <AboutUsSec /> */}
      <AboutUsPage />
      
    </div>
  );
}

export default HomePage;
