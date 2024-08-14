import React from "react";
import SignUpPage from "@/Layout/SignUp";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Verify Email " 
        subheadingText=""
      />
      <SignUpPage />
    </div>
  );
}

export default SignIn;
