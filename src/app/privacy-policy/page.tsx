import React from "react";
import InnerBannerHd from "@/Layout/InnerBannerHeading";
import TermsPage from "@/Layout/Terms";
import PrivacyPage from "../../Layout/Privacy";

function AboutUs() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText="Privacy Policy"
        subheadingText=""
      />
      <PrivacyPage />
    </div>
  );
}

export default AboutUs;
