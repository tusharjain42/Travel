"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Form,
  Image,
  Nav,
  Dropdown,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styles from "@/styles/HotelDetail/HotelDetail.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomListing from "../RoomList";
import ReviewSection from "../Review";

function HotelDetailPage() {
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    ref: mainSliderRef,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: thumbSliderRef,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  const [activeSection, setActiveSection] = useState("anim1");

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = window.innerWidth > 991 ? -200 : -480;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  const handleScrollSpy = () => {
    const sections = ["anim1", "anim2", "anim3", "anim4", "anim5"];
    const offset = window.innerWidth > 991 ? -150 : -480;

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - offset;
        const sectionBottom = sectionTop + sectionElement.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <div className={styles.HotelDetailOuter}>
      <div className={`${styles.ContainerCss} container`}>
        <div className={styles.HotelDtl_left}>
          <SiteBreadcrumb />

          <div className={styles.HotelDtlTop}>
            <h1>The St. Regis Goa Resort</h1>
            <div className={styles.TripRvOuter}>
              <div className={styles.TrustImg}>
                <Image src="/assets/trip-review.jpg" alt="" />
              </div>
              <div className={styles.ReviewImg}>
                <Image src="/assets/rating-1.png" alt="" />
              </div>
              <div className={styles.LcnBlock}>
                <Image src="/assets/location-black.png" alt="" />
                <span>Cavelossim, Goa, India</span>
                <a href="#">Great location - show map </a>
              </div>
            </div>
          </div>

          <div className={styles.SwipeGallerySlider}>
            <div className="thumbnail-gallery">
              <div className={`${styles.MainSlider} main-slider`}>
                <Slider {...mainSettings}>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery1.png" alt="Main Slide 1" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery2.png" alt="Main Slide 2" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery3.png" alt="Main Slide 3" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery1.png" alt="Main Slide 4" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery2.png" alt="Main Slide 5" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery3.png" alt="Main Slide 6" />
                  </div>
                </Slider>
              </div>
              <div className={`${styles.ThumbSlider} thumb-slider`}>
                <Slider {...thumbSettings}>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery1.png" alt="Thumbnail 1" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery2.png" alt="Thumbnail 2" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery3.png" alt="Thumbnail 3" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery1.png" alt="Thumbnail 4" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery2.png" alt="Thumbnail 5" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/gallery3.png" alt="Thumbnail 6" />
                  </div>
                </Slider>
                <a href="#" className={styles.moreImg}>
                  <strong>+25</strong>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className={styles.HtlDtlFullInfo}>
            <Nav className={styles.HtlNavOuter}>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim1"
                  onClick={(e) => handleScroll(e, "anim1")}
                  className={`${styles.navLink} ${
                    activeSection === "anim1" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/overview-icon.png" alt="" /> Overview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim2"
                  onClick={(e) => handleScroll(e, "anim2")}
                  className={`${styles.navLink} ${
                    activeSection === "anim2" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/amenities-icon.png" alt="" /> Amenities
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim3"
                  onClick={(e) => handleScroll(e, "anim3")}
                  className={`${styles.navLink} ${
                    activeSection === "anim3" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/rooms-icon.png" alt="" /> Rooms
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim4"
                  onClick={(e) => handleScroll(e, "anim4")}
                  className={`${styles.navLink} ${
                    activeSection === "anim4" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/star-icon.png" alt="" /> Guest Reviews
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim5"
                  onClick={(e) => handleScroll(e, "anim5")}
                  className={`${styles.navLink} ${
                    activeSection === "anim5" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/policies-icon.png" alt="" /> Policies
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className={styles.HtlTabContent}>
              <div className={styles.OverviewSec} id="anim1">
                <h3>Overview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ultricies libero sit amet sapien lobortis, eu aliquet felis
                  porta. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <p>
                  Sed volutpat augue lacus, pretium pharetra lorem luctus
                  malesuada. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Integer vitae pharetra nunc. Cras sit amet nisi
                  urna. Aliquam at semper massa. Sed quis ligula non ante
                  dapibus faucibus eget et diam. Donec malesuada, neque vel
                  feugiat scelerisque, orci justo placerat tellus.
                </p>
                <h4>Accommodation</h4>
                <p>
                  FabExpress Alor Resort provides rooms in Calangute near
                  Calangute Beach and Candolim Beach. With free WiFi, this
                  3-star hotel offers room service and a 24-hour front desk. The
                  hotel features family rooms.
                </p>
                <h4>Main Villa</h4>
                <p>
                  Sed volutpat augue lacus, pretium pharetra lorem luctus
                  malesuada. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Integer vitae pharetra nunc. Cras sit amet nisi
                  urna. Aliquam at semper massa. Sed quis ligula non ante
                  dapibus faucibus eget et diam. Donec malesuada, neque vel
                  feugiat scelerisque, orci justo placerat tellus.
                </p>
                <h4>Pool House</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ultricies libero sit amet sapien lobortis, eu aliquet felis
                  porta. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>

              <div className={styles.AmenitiesOuter} id="anim2">
                <div className={styles.AmenitiesContent}>
                  <h3>Popular amenities</h3>
                  <div
                    className={`${styles.AmenitiesListBgRow} d-flex flex-wrap align-items-center`}
                  >
                    <div className={styles.AmenitiesListBgCol}>
                      <i>
                        <Image src="/assets/wi-fi.png" alt="img" />
                      </i>
                      <div>Wi-Fi</div>
                    </div>
                    <div className={styles.AmenitiesListBgCol}>
                      <i>
                        <Image src="/assets/parking.png" alt="img" />
                      </i>
                      <div>Private Parking</div>
                    </div>
                    <div className={styles.AmenitiesListBgCol}>
                      <i>
                        <Image src="/assets/air-condi.png" alt="img" />
                      </i>
                      <div>Air-conditioning</div>
                    </div>
                    <div className={styles.AmenitiesListBgCol}>
                      <i>
                        <Image src="/assets/fitness.png" alt="img" />
                      </i>
                      <div>Fitness centre</div>
                    </div>
                    <div className={styles.AmenitiesListBgCol}>
                      <i>
                        <Image src="/assets/restro.png" alt="img" />
                      </i>
                      <div>Restaurant</div>
                    </div>
                  </div>
                  <div
                    className={`${styles.AmenitiesListRow} d-flex flex-wrap align-items-center`}
                  >
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/king-bed.png" alt="img" />
                      </i>
                      <div>4 Bedrooms</div>
                    </div>
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/bath.png" alt="img" />
                      </i>
                      <div>3 Bathrooms</div>
                    </div>
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/kitchen.png" alt="img" />
                      </i>
                      <div>Kitchen</div>
                    </div>
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/lounge.png" alt="img" />
                      </i>
                      <div>Lounge</div>
                    </div>
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/jacuzzi.png" alt="img" />
                      </i>
                      <div>Jacuzzi</div>
                    </div>
                    <div className={styles.AmenitiesListCol}>
                      <i>
                        <Image src="/assets/pool.png" alt="img" />
                      </i>
                      <div>Infinity Pool</div>
                    </div>
                    <div className={styles.AmenitiesViewMore}>
                      <Nav.Link
                        href="#"
                        className={styles.FlightTravelerTxtLink}
                      >
                        View More
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ChooseRoomOuter} id="anim3">
                <h3>Choose your room</h3>
                <div className={styles.ChooseRoomSearchBox}>
                  <div
                    className={`${styles.ChooseRoomSearchField} d-flex flex-wrap`}
                  >
                    <div
                      className={`${styles.ChooseRoomSearchFieldLeft} d-flex align-items-center`}
                    >
                      <div
                        className={`${styles.ChooseRoomSearchFieldWd1} d-flex`}
                      >
                        <Form>
                          <Form.Group>
                            <Form.Label className={styles.SrchLabel}>
                              Check-In- Check-Out
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Wed, Aug 14 - Thu, Aug 15"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className={`${styles.ChooseRoomSearchFieldWd2}`}>
                        <Dropdown>
                          <Dropdown.Toggle
                            id="Guest"
                            className={styles.GuestBtn}
                          >
                            Guests
                            <span>2 Adults, 1 Room</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className={styles.Guest}>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <Button
                      className={`${styles.ChooseRoomSearchBtn} d-flex flex-wrap align-items-center`}
                    >
                      <i>
                        <Image src="/assets/search-icon.png" alt="" />
                      </i>
                      <span>Change Search </span>
                    </Button>
                  </div>
                  <div
                    className={`${styles.RoomShowingPaging} d-flex flex-wrap`}
                  >
                    <div className={`${styles.RoomShowlist} d-flex flex-wrap`}>
                      <span>All Rooms</span>
                      <Nav.Link
                        href="#"
                        className={styles.FlightTravelerTxtLink}
                      >
                        1 Bed
                      </Nav.Link>
                      <Nav.Link
                        href="#"
                        className={styles.FlightTravelerTxtLink}
                      >
                        2 Bed
                      </Nav.Link>
                    </div>
                    <div className="">Showing 9 of 9 rooms</div>
                  </div>
                </div>
                <div className={styles.SelectRoomOuter}>
                  <div
                    className={`${styles.SelectionRoomList} d-inline-flex flex-wrap`}
                  >
                    <Nav.Link href="#" className={styles.SelectionRoomListLink}>
                      <span>Select room 1</span>
                      <span>Anex-River Suite, All Inclusive</span>
                    </Nav.Link>
                    <Nav.Link href="#" className={styles.SelectionRoomListLink}>
                      <span>Select room 2</span>
                      <span>Economy Room, All Inclusive</span>
                    </Nav.Link>
                  </div>
                  <RoomListing />
                </div>
              </div>

              <div className={styles.GuestReview} id="anim4">
                <ReviewSection />
              </div>

              <div className={styles.Policies} id="anim5">
                <h3>Policies</h3>
                <Row>
                  <Col md={6} className={"pt-2 pb-3"}>
                    <h4>Check-in</h4>
                    <p>
                      Check-in start time: 4:00 PM, Check-in end time: anytime
                      <br />
                      Early check-in subject to availability <br />
                      Early check-in fee: GBP 10 <br />
                      Contactless check-in available <br />
                      Minimum check-in age: 18
                    </p>
                  </Col>
                  <Col md={6} className={"pt-2 pb-3"}>
                    <h4>Check-out</h4>
                    <p>
                      Check-out before 11 AM
                      <br />
                      Contactless check-out available
                      <br />
                      Late check-out subject to availability
                      <br />
                      Late check-out fee: GBP 10
                    </p>
                  </Col>
                </Row>
                <h4>Special check-in instructions</h4>
                <p>Front desk staff will greet guests on arrival</p>
                <h4>Access methods</h4>
                <p>Staffed front desk</p>
                <h4>Pets</h4>
                <p>
                  Pets allowed for an extra charge of GBP 40 per pet, per stay
                  <br />
                  Service animals are welcome, and are exempt from fees
                  <br />
                  Welcoming dogs only
                  <br />
                  1 total (up to 66 lbs per pet)
                  <br />
                  Pets cannot be left unattended
                  <br />
                  Food and water bowls are available
                </p>
                <h4>Children and extra beds</h4>
                <Row>
                  <Col md={6} className={"pt-2 pb-3"}>
                    <h5>Child policies</h5>
                    <p>
                      Children of all ages are welcome.
                      <br />
                      Children 18 and above will be charged as adults at this
                      property.
                      <br />
                      To see correct prices and occupancy info, add the number
                      and ages of children in your group to your search.
                    </p>
                  </Col>
                  <Col md={6} className={"pt-2 pb-3"}>
                    <h5>Crib and extra bed policies</h5>
                    <h6>0 - 8 years</h6>
                    <p>Extra bed upon request: Free</p>
                    <h6>9+ years</h6>
                    <p>Extra bed upon request: ₹ 800 per person, per night</p>
                  </Col>
                </Row>
                <p>
                  Prices for extra beds aren't included in the total price.
                  They'll have to be paid for separately during your stay.
                </p>
                <p>
                  The number of extra beds allowed depends on the option you
                  choose. Check your selected option for more info.
                </p>
                <p>There are no cribs available at this property.</p>
                <p>All extra beds are subject to availability.</p>
                <h4>Age restriction</h4>
                <p>The minimum age for check-in is 18</p>
                <h4>Accepted payment methods</h4>
                <Row>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/amex.png" alt="amex" />
                  </Col>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/visa.png" alt="visa" />
                  </Col>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/maestro.png" alt="maestro" />
                  </Col>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/disner.png" alt="disner" />
                  </Col>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/maestro2.png" alt="maestro2" />
                  </Col>
                  <Col className={styles.paypalWd}>
                    <Image src="/assets/discover.png" alt="discover" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.HotelDtlRight}>
          <div className={styles.HtlBtnGrp}>
            <a href="#">
              <Image src="/assets/share-icon.png" alt="" /> Share
            </a>
            <a href="#">
              <Image src="/assets/heart-icon.png" alt="" /> Save
            </a>
          </div>
          <a className="btn-yellow w-100" href="#">
            Reserve Booking
          </a>
          <div className={styles.PkgInfo}>
            <h4>3 nights, 2 adults</h4>
            <div className={styles.PkgPrice}>INR 91,088.00</div>
            <div className={styles.PkgTax}>
              INR 27,140 total includes taxes & fees
            </div>
            <hr />
            <h5>Quick Look:</h5>
            <p>
              4 bedrooms, 4 bathrooms, impressive outdoor pool and Jacuzzi,
              remarkable modern design
            </p>
            <div className={styles.BedBathGroup}>
              <ul>
                <li>
                  <Image src="/assets/bed-icon.png" alt="" />
                  <span>
                    Bedrooms
                    <strong>1-3</strong>
                  </span>
                </li>
                <li>
                  <Image src="/assets/bathroom-icon.png" alt="" />
                  <span>
                    Bathrooms
                    <strong>1-3</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.DtlRtInOut}>
            <ul>
              <li>
                <strong>Check-in time</strong>
                1:00 PM
              </li>
              <li>
                <strong>Check-out time</strong>
                11:00 AM
              </li>
            </ul>
          </div>
          <div className={styles.ShowMap}>
            <Image src="/assets/map.png" className={styles.MapImg} alt="img" />
            <div className={styles.ShowMapTop}>
              <Image src="/assets/location-pin.png" alt="img" />
              <Nav.Link href="#" className={"btn-yellow"}>
                Show on Map
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailPage;
