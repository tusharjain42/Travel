"use client";

import React, { useState } from "react";
import SideBar from "@/Layout/SideBar";
import styles from "@/styles/MapView/MapView.module.scss";
import {
  Button,
  Card,
  CardGroup,
  Figure,
  Image,
  ListGroup,
  Nav,
  Form,
} from "react-bootstrap";

function MapViewPage() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.mapViewOuter}>
      <div className={styles.mapSidebar}>
        <SideBar />
      </div>
      <div
        className={`${styles.mapRtBlock} ${isToggled ? styles.listClose : ""}`}
      >
        <div className={styles.listBlock}>
          <Button className={styles.ltBtn} onClick={handleToggle}>
            <Image src="/assets/rt-arw.png" alt="Toggle" />
          </Button>
          <div className={styles.listScrollBox}>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-1.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    The Seven Inn Near Delhi Airport
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-2.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    Kenilworth Beach Resort Hotel
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-3.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    Kenilworth Beach Resort Hotel
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-4.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    The Seven Inn Near Delhi Airport
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-5.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    Kenilworth Beach Resort Hotel
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
            <CardGroup className={`${styles.HotelList} mb-4`}>
              <Card className={styles.HotelInfo}>
                <a className={styles.HotelInfoImg} href="#">
                  <Image src="/assets/hotel-img-6.jpg" alt="img" />
                </a>
                <div className={styles.HotelContentPanel}>
                  <Nav.Link href="#" className={styles.HotelContentHeading}>
                    The Seven Inn Near Delhi Airport
                  </Nav.Link>
                  <div className={`${styles.HoteLocationBox} d-flex flex-wrap`}>
                    <div className={`${styles.HotelLocationText}`}>
                      <Image src="/assets/location-black.png" alt="img" />
                      Arossim, Goa, India
                    </div>
                    <a href="#" className={styles.hotellocationMapLink}>
                      Show on map
                    </a>
                  </div>
                  <div className={styles.HotelRatingBox}>
                    <Image src="/assets/rating-1.png" alt="img" />
                    <div
                      className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}
                    >
                      <span className={`${styles.HotelRatingValue} pe-2`}>
                        4.5
                      </span>
                      <Image
                        src="/assets/trust-plt.png"
                        className={"pe-2"}
                        alt="img"
                      />
                      1,933 reviews
                    </div>
                  </div>
                  <div className={styles.HotelSizeText}>
                    One-Bedroom Apartment
                  </div>
                  <ListGroup
                    as="ul"
                    className={`${styles.HotelServicesList} d-flex flex-wrap`}
                  >
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-1.png"
                        alt="img"
                      />
                      Breakfast Included
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-2.png"
                        alt="img"
                      />
                      Pool
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image
                        src="/assets/hotel-services-icon-3.png"
                        alt="img"
                      />
                      Hot Tub
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card>
              <Card className={styles.HotelPrice}>
                <div className={styles.HotelPriceLabel}>
                  1 night, 3 adults, 1 child
                </div>
                <div className={styles.HotelPriceValue}>£8,00</div>
                <div className={styles.HotelPriceLabel}>
                  INR 27,140 total <br /> includes taxes & fees
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  See Availability
                </Nav.Link>
              </Card>
            </CardGroup>
          </div>
        </div>
        <div className={styles.mapBlock}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5455923040086!2d75.8308781761482!3d26.886174661229333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6f25a2a4411%3A0x19fcf01ff5428a54!2sDotsquares%20Technologies%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1723640118425!5m2!1sen!2sin&disableDefaultUI=true"></iframe>
          <div className={styles.mapSrchBox}>
            <Form>
              <Form.Control type="text" placeholder="Search Here..." />
            </Form>
          </div>
          <a href="#" className={styles.closeMapBtn}>
            Close Map
            <Image src="/assets/close-icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MapViewPage;
