
import React from "react";
import FaqPage from "@/Layout/Faq";
import InnerBannerHd from "../../Layout/InnerBannerHeading";

function HomePage() {
  return (
    <div>
    <InnerBannerHd
        headingImg=""
        headingText="FAQ" 
        subheadingText=""
      />
      <FaqPage />
      
    </div>
  );
}

export default HomePage;