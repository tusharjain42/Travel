import React from "react";
import SignInPage from "@/Layout/SignIn";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Sign In "
        subheadingText="" 
      />
      <SignInPage />
    </div>
  );
}

export default SignIn;
