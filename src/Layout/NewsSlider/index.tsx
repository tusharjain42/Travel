"use client";
import React from "react";
import { Nav, Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/NewsSlider/NewsSlider.module.scss";
function NewsSlider() { 
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className={styles.NewsContent}>
        <h3>Latest News</h3>
        <Slider {...settings}>
          <div className="item">
            <div className={styles.NewsSliderCol}>
              <a href="#" className={styles.NewsImage}>
                <Image alt="" src="/assets/news-1.jpg" />
              </a>
              <div className={styles.NewsDtl}>
                <Nav.Link href="#" className={styles.NewsHeading}>
                  Lorem Ipsum{" "}
                </Nav.Link>
                <div
                  className={`${styles.NewsInfoList} d-flex flex-wrap align-items-center`}
                >
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/calendar.svg" width={16} alt="img" />
                    03/07/2015
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/user.svg" width={16} alt="img" />
                    By user Name
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/comment.svg" width={18} alt="img" />
                    10 comments
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className={styles.NewsSliderCol}>
              <a href="#" className={styles.NewsImage}>
                <Image alt="" src="/assets/news-1.jpg" />
              </a>
              <div className={styles.NewsDtl}>
                <Nav.Link href="#" className={styles.NewsHeading}>
                  Lorem Ipsum{" "}
                </Nav.Link>
                <div
                  className={`${styles.NewsInfoList} d-flex flex-wrap align-items-center`}
                >
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/calendar.svg" width={16} alt="img" />
                    03/07/2015
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/user.svg" width={16} alt="img" />
                    By user Name
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/comment.svg" width={18} alt="img" />
                    10 comments
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className={styles.NewsSliderCol}>
              <a href="#" className={styles.NewsImage}>
                <Image alt="" src="/assets/news-1.jpg" />
              </a>
              <div className={styles.NewsDtl}>
                <Nav.Link href="#" className={styles.NewsHeading}>
                  Lorem Ipsum{" "}
                </Nav.Link>
                <div
                  className={`${styles.NewsInfoList} d-flex flex-wrap align-items-center`}
                >
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/calendar.svg" width={16} alt="img" />
                    03/07/2015
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/user.svg" width={16} alt="img" />
                    By user Name
                  </div>
                  <div
                    className={`${styles.NewsInfo} d-flex flex-wrap align-items-center`}
                  >
                    <Image src="/assets/comment.svg" width={18} alt="img" />
                    10 comments
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
}
export default NewsSlider;
