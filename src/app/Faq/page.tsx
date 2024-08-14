
import React from "react";

import Faq from "../../Layout/Home/Components/Faq";
import InnerBannerHd from "../../Layout/InnerBannerHeading";

function HomePage() {
  return (
    <div>
    <InnerBannerHd
        headingImg=""
        headingText="FAQ" 
        subheadingText=""
      />
      <Faq />
      
    </div>
  );
}

export default HomePage;