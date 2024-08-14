"use client";

import React from "react";

import { Button, Image } from "react-bootstrap";
import styles from "@/styles/Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.PreloaderOuter}>
      <div className={styles.PreloaderContainer}>
        <div className={styles.PreImg}>
          <Image src="/assets/character-preloader.gif" alt="" />
        </div>
        <div className={"text-center"}>
          <h2>Loading...</h2>
          <p>
            Please be patient! Upload your flight results. <br />
            Lorem ipsum dolor sit amet design sample
          </p>
          <Button className={styles.LdrBtn}>Home Page</Button>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
