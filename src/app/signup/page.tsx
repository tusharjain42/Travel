import React from "react";
import Signup from "../../Layout/SignUp"
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function verify() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText=" Sign Up " 
        subheadingText=""
      />
      <Signup/>

    </div>
  );
}

export default verify;
