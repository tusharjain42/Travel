import React from "react";
import LoginWithPassword from "../../Layout/LoginWithPass";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function Login() {
  return (
    <div>
      <InnerBannerHd
        headingImg=""
        headingText="Login with Password"
      />
      <LoginWithPassword />
    </div>
  );
}

export default Login;
