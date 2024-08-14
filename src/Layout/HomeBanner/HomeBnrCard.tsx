import React from "react";

import styles from "@/styles/HomeBanner/HomeBnrCard.module.scss";
import Image from "react-bootstrap/Image";

function HomeBnrCard() {
  return (
    <div className={styles.DiscoverListCard}>
      <i><Image src="/assets/icon3.png" alt="" /></i>
      <h5>Discover the possibilities</h5>
      <p>With nearly half a million attractions, hotels & more, you're sure to find joy.</p>
    </div>
  );
}

export default HomeBnrCard;
