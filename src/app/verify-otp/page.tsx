import React from "react";
import VerifyOtp from "@/Layout/verifyOtpLogin";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function page() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Verify Otp" 
        subheadingText=""
      />
      <VerifyOtp />
    </div>
  );
}

export default page;
