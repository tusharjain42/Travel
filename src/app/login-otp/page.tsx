import React from "react";
import VerifyOtp from "@/Layout/verifyOtpLogin";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function page() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Login with Otp" 
        subheadingText=""
      />
      <VerifyOtp />
    </div>
  );
}

export default page;
