"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/Home/hopSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
function hopSlider() {
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
          slidesToShow: 6,
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
    <div className="hopSliderSec">
      <div className="heading">
        <h2>Hop on, hop off</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <Slider {...settings}>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>Mumbai</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img1.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>Greece</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img2.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>France</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img3.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>Spain</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img1.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>Polland</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="hopSliderCol">
            <div className="hopSliderImg">
              <span className="offerLabel">Direct</span>
              <Image
                alt=""
                width={300}
                height={300}
                src="/assets/img3.jpg"
              />
            </div>
            <div className="hopSliderinfo">
              <div className="hopSliderinfoInner">
                <h4>France</h4>
                <span className="priceBox">From ₹ 4,498</span>
                <Link href="#" className="viewDetailLink">
                  View Detail
                </Link>
              </div>
            </div>
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

export default hopSlider;
