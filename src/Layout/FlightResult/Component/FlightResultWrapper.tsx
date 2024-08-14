"use client";

import React from "react";
import FlightRightBlock from "./FlightRightBlock";
import SideBar from "@/Layout/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/FlightResult/FlightResult.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

function FlightResultWrapper() {
  return (
      <div className={styles.FlightResultWrapper}>
        <Container>
        <SiteBreadcrumb/>
          <Row>
            <Col className={styles.FlightLeft}>
              <SideBar />
            </Col>
            <Col className={styles.FlightRight}>
             <FlightRightBlock />
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default FlightResultWrapper;
