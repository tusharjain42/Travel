"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/FlightResult/DaySlider.module.scss";

function DaySlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //initialSlide: 2
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //initialSlide: 2
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
      <div className={styles.DaySlider}>
        <Slider {...settings}>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
          <div className={styles.SlideItem}>
            <div className={styles.DaySlideBlock}>
              Sun, 4 Aug
              <span>₹ 11,810</span>
            </div>
          </div>
        </Slider>
      </div>
  );
}

export default DaySlide;
