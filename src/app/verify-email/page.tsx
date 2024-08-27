import React from "react";
import VerifyEmail from "@/Layout/Verify";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Verify Email " 
        subheadingText=""
      />
      <VerifyEmail />
    </div>
  );
}

export default SignIn;
