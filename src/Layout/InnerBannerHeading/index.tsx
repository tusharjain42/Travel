"use client";

import React, { ReactNode } from "react";
import styles from "@/styles/InnerBannerHeading/InnerBannerHeading.module.scss";
import Image from "react-bootstrap/Image";

interface InnerBannerHdProps {
  headingImg: ReactNode;
  headingText: string;
  subheadingText: string;
}

const InnerBannerHd: React.FC<InnerBannerHdProps> = ({
  headingImg,
  headingText,
  subheadingText,
}) => {
  return (
    <div className={styles.InnerBannerHd}>
      <div className={"container"}>
        <div className={styles.InrBnrHd}>
          <h1>
            {headingImg}
            {headingText}
            <span>{subheadingText}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InnerBannerHd;
