import React from "react";
import ForgotPass from "../../Layout/ForgotPassword"
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText="Forgot Password "
        subheadingText="" 
      />
      <ForgotPass />
    </div>
  );
}

export default SignIn;
