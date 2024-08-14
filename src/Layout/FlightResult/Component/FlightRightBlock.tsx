"use client";

import React from "react";
import DaySlide from "./DaySlide";
import FlightResultList from "./FlightResultList";
import styles from "@/styles/FlightResult/FlightResult.module.scss";

function FlightRightBlock() {
  return (
    <>
    <div className={styles.FlightRightBlock}>
      <DaySlide />
      <FlightResultList />
    </div>
    </>
  );
}

export default FlightRightBlock;
