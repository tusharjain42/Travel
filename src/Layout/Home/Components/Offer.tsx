"use client";
import Link from "next/link";
import styles from "@/styles/Home/Offer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Offer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <>
      <div className={styles.OfferOuter}>
        <div className={"container"}>
          <div className={"text-center"}>
            <h2>Offers</h2>
            <p>Promotions, deals & special offers for you</p>
          </div>
          <Slider {...settings}>
            <div className="item">
              <Row className={styles.RowMrg}>
                <Col md={6}>
                  <div className={styles.OfferTextBox}>
                    <h4>Fly away to your dream vacation</h4>
                    <p>
                      Get inspired - compare and book flights with flexibility
                    </p>
                    <Link href="#" className={styles.SrchFlightBtn}>
                      Search for Flights
                    </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.OffersImg}>
                    <Image src="/assets/offers-img.jpg" alt="" />
                    <div className={styles.ImgText}>
                      <h4>Seize the moment!</h4>
                      <p>
                        Save 15% or more when you book and stay
                        <br />
                        before October 1, 2024
                      </p>
                      <Link href="#" className={styles.SrchFlightBtn}>
                        Find Getway Deals
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row className={styles.RowMrg}>
                <Col md={6}>
                  <div className={styles.OfferTextBox}>
                    <h4>Fly away to your dream vacation</h4>
                    <p>
                      Get inspired - compare and book flights with flexibility
                    </p>
                    <Link href="#" className={styles.SrchFlightBtn}>
                      Search for Flights
                    </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.OffersImg}>
                    <Image src="/assets/offers-img.jpg" alt="" />
                    <div className={styles.ImgText}>
                      <h4>Seize the moment!</h4>
                      <p>
                        Save 15% or more when you book and stay
                        <br />
                        before October 1, 2024
                      </p>
                      <Link href="#" className={styles.SrchFlightBtn}>
                        Find Getway Deals
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item">
              <Row className={styles.RowMrg}>
                <Col md={6}>
                  <div className={styles.OfferTextBox}>
                    <h4>Fly away to your dream vacation</h4>
                    <p>
                      Get inspired - compare and book flights with flexibility
                    </p>
                    <Link href="#" className={styles.SrchFlightBtn}>
                      Search for Flights
                    </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.OffersImg}>
                    <Image src="/assets/offers-img.jpg" alt="" />
                    <div className={styles.ImgText}>
                      <h4>Seize the moment!</h4>
                      <p>
                        Save 15% or more when you book and stay
                        <br />
                        before October 1, 2024
                      </p>
                      <Link href="#" className={styles.SrchFlightBtn}>
                        Find Getway Deals
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Offer;
