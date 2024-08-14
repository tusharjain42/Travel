"use client";
import React from "react";
import { Row, Col, Container, Nav, Image } from 'react-bootstrap';
import HotelResultRightSideBar from "./HotelResultRightSideBar";
import SiteBreadcrumb from "../GLobal/Breadcrumb";
import styles from "@/styles/HotelResult/HotelResult.module.scss";
import SideBar from "../SideBar";


function HotelResult() {
  return (
      <div className={styles.HotelResultPage}>
        <Container>
          <SiteBreadcrumb/>
          <Row>
            <Col className={styles.HotelResultLeft}>
              <div className={styles.ShowMap}>
               <Image src="/assets/map.png" className={styles.MapImg} alt="img" />
               <div className={styles.ShowMapTop}>
                  <Image src="/assets/location-pin.png" alt="img" />
                  <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
               </div>              
              </div>
            <SideBar/>
            </Col>
            <Col className={styles.HotelResultRight}>
              <HotelResultRightSideBar/>
            </Col>
          </Row>   
          </Container>   
      </div>
  );
}

export default HotelResult;
