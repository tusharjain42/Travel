import React from "react";
import Verifyemail from "../../Layout/VerifyEmail"
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function verify() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Sign Up " 
        subheadingText=""
      />
      <Verifyemail/>

    </div>
  );
}

export default verify;
