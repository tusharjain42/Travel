"use client";
import Link from "next/link";
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
              <Link href="/">
                <Image src="/assets/travel-logo.png" alt="" />
              </Link>
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
                  <Link href="/">Home</Link>
                  <Link href="/about-us">About</Link>
                  <Link href="/faq">Faq</Link>
                  <Link href="/contactus">Contact US</Link>
                </Nav>
                <Nav className={styles.FtrNav}>
                  <Link href="/verify-email">Sign In</Link>
                  <Link href="/verify-email">Sign Up</Link>
                </Nav>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.FtContact}>
              <h6>Connect with us</h6>
              <Nav className={styles.FtrCtNav}>
                <Link href="tel:+000123456789" className={styles.NavLinkRt}>
                  <Image src="/assets/call-icon.png" alt="Call" /> (000) 123 456
                  789
                </Link>
                <Link href="mailto:example@gmail.com">
                  <Image src="/assets/icon9.png" alt="" /> example@gmail.com
                </Link>
              </Nav>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.CopyRight}>
              <p>
                Copyright© 2024. All rights reserved.
                <Link href="terms-and-conditions">Terms & Conditions</Link> |
                <Link style={{ marginLeft: "5px" }} href="privacy-policy">
                  Privacy policy
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
