import React from "react";
import ResetPassword from "@/Layout/ResetPassword";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText="Reset Password "
        subheadingText="" 
      />
      <ResetPassword />
    </div>
  );
}

export default SignIn;
