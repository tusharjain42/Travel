"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/Home/destinationSlider.scss";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function DestinationSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 4,
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
    <div className="destinationSliderSec">
      <div className="heading">
        <Container>
          <h2>Top Destination</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
          </p>
        </Container>
      </div>
      <Slider {...settings}>
        <div className="item">
          <div className="destinationSliderCol">
            <Link href="#" className="destinationSliderImg">
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/destination_slide01.jpg"
              />
              <span className="slideLink">Dubai</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="destinationSliderCol">
            <Link href="#" className="destinationSliderImg">
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/destination_slide02.jpg"
              />
              <span className="slideLink">Italy</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="destinationSliderCol">
            <Link href="#" className="destinationSliderImg">
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/destination_slide03.jpg"
              />
              <span className="slideLink">Singapore</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="destinationSliderCol">
            <Link href="#" className="destinationSliderImg">
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/destination_slide04.jpg"
              />
              <span className="slideLink">Spain</span>
            </Link>
          </div>
        </div>
      </Slider>
      <div className="sliderBtnRow">
        <Link href="#" className="globalBtn">
          View All
        </Link>
      </div>
    </div>
  );
}

export default DestinationSlider;
