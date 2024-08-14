"use client";

import React from "react";
import { Row, Col, Container, Nav, Image } from 'react-bootstrap';
import FlightBookingLeftSide from "./FlightBookingLeftSide";
import FlightBookingRightSide from "./FlightBookingRightSide";
import styles from "@/styles/FlightBooking/FlightBooking.module.scss";


function FlightBookingPage() {
  return (
      <div className={styles.FlightBookingPage}>
        <Container>
          <Row>
            <Col className={styles.FlightBookingLeftSide}>              
             <FlightBookingLeftSide/>
            </Col>
            <Col className={styles.FlightBookingRightSide}>
              <FlightBookingRightSide/>
            </Col>
          </Row>   
          </Container>   
      </div>
  );
}

export default FlightBookingPage;
