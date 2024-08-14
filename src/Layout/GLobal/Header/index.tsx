"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";
import {
  Container,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.Header} ${sticky ? "sticky" : ""}`}>
      <Navbar collapseOnSelect expand="lg" className={`${styles.HdrInr} bg-body-tertiary`}>
        <Container>
          <Navbar.Brand href="#" className={styles.Logo}>
            <Image src="/assets/travel-logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.NavBtn}/>
          <Navbar.Collapse id="responsive-navbar-nav" className={styles.NavCustom}>
            <Nav>
              <Nav.Link href="/" className={styles.NavLink}>Home</Nav.Link>
              <Nav.Link href="/aboutUs" className={styles.NavLink}>About Us</Nav.Link>
              <Nav.Link href="/Faq" className={styles.NavLink}>FAQ</Nav.Link>
              <Nav.Link href="/#" className={styles.NavLink}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className={styles.NavLinkRt}>
                <Image src="/assets/call-icon.png" alt="" /> (000) 123 456 789
              </Nav.Link>
              <Nav.Link href="/signin" className={styles.NavLinkRt}>
                <Image  src="/assets/user-icon-trvl.png" alt="" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const Index: React.FC = () => {
  return <Header />;
};

export default Index;
