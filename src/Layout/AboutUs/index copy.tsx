"use client";
import React from "react";
import { Row, Col, Container, Nav, Image } from "react-bootstrap";
import styles from "@/styles/AboutUs/AboutUs.module.scss";
import NewsSlider from "@/Layout/NewsSlider";
function AboutUsPage() {
  return (
    <div className={styles.AboutUsPage}>
      <Container>
        <div className={styles.AboutContent}>
          <h3>Who We Are?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Container>
      <div className={`${styles.AboutContent} ${styles.AboutServices}`}>
        <Container>
          <h3>Our Services</h3>
          <Row>
            <Col lg={3} sm={6}>
              <div className={styles.AboutServicesCol}>
                <i className={styles.AboutServicesIcon}>
                  <Image src="/assets/heart.png" alt="img" />
                </i>
                <h3 className={"h5"}>Happy Clients</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <Nav.Link href="#" className={styles.ReadMoreLink}>
                  View Detail <Image src="/assets/black-right.png" alt="img" />{" "}
                </Nav.Link>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className={styles.AboutServicesCol}>
                <i className={styles.AboutServicesIcon}>
                  <Image src="/assets/tour.png" alt="img" />
                </i>
                <h3 className={"h5"}>Amazing Tour</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <Nav.Link href="#" className={styles.ReadMoreLink}>
                  View Detail <Image src="/assets/black-right.png" alt="img" />{" "}
                </Nav.Link>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className={styles.AboutServicesCol}>
                <i className={styles.AboutServicesIcon}>
                  <Image src="/assets/bag.png" alt="img" />
                </i>
                <h3 className={"h5"}>Support Cases</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <Nav.Link href="#" className={styles.ReadMoreLink}>
                  View Detail <Image src="/assets/black-right.png" alt="img" />{" "}
                </Nav.Link>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className={styles.AboutServicesCol}>
                <i className={styles.AboutServicesIcon}>
                  <Image src="/assets/hotel.png" alt="img" />
                </i>
                <h3 className={"h5"}>Support Cases</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <Nav.Link href="#" className={styles.ReadMoreLink}>
                  View Detail <Image src="/assets/black-right.png" alt="img" />{" "}
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <NewsSlider />
    </div>
  );
}
export default AboutUsPage;
