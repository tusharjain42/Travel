"use client";

import React from "react";

import styles from "@/styles/Footer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

function Index() {
  return (
    <div className={styles.Footer}>
      <div className={"container"}>
        <Row>
          <Col md={3}>
            <div className={styles.FtInfo}>
              <a href="#">
                <Image src="/assets/travel-logo.png" alt="" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.FtLinks}>
              <h6>Quick Links</h6>
              <div className={`${styles.FtLinksCard} d-flex`}>
                <Nav className={styles.FtrNav}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutUs">About</Nav.Link>
                  <Nav.Link href="/Faq">Faq</Nav.Link>
                  <Nav.Link href="#">Contact US</Nav.Link>
                </Nav>
                <Nav className={styles.FtrNav}>
                  <Nav.Link href="/signin">Sign In</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.FtContact}>
              <h6>Connect with us</h6>
              <Nav className={styles.FtrCtNav}>
                <Nav.Link href="#">
                  <Image src="/assets/icon8.png" alt="" /> (000) 123 456 789
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src="/assets/icon9.png" alt="" /> example@email.com
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.CopyRight}>
              <p>
                Copyright© 2024. All rights reserved.
                <a href="#">Terms & Conditions</a> | 
                <a href="#">Privacy policy</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
