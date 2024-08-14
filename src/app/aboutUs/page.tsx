
import React from "react";

import AboutUsSec from "../../Layout/Home/Components/AboutUsSec";
import InnerBannerHd from "../../Layout/InnerBannerHeading";

function HomePage() {
  return (
    <div>
    <InnerBannerHd
        headingImg=""
        headingText=" About Us " 
        subheadingText=""
      />
      <AboutUsSec />
      
    </div>
  );
}

export default HomePage;
