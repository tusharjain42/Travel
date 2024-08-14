"use client";

import React from "react";

import styles from "@/styles/Home/Faq.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <div className={styles.FaqOuter} id="faqs">
      <div className={"container"}>
        <div className={"text-center pb-4"}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Row>
          <Col md={4}>
            <div className={styles.FaqImg}>
              <Image src="/assets/faq-img.png" alt="faq-img" />
            </div>
          </Col>
          <Col md={8}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className={styles.CustomAccordion}>
                <Accordion.Header className={styles.CustomAccordionHdr}>How can I use to manage my travel bookings?</Accordion.Header>
                <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ex imperdiet, mattis libero vel, pharetra felis. Ut id volutpat urna. In molestie velit eu sapien maximus imperdiet. Quisque sit amet ultricies ligula, vel maximus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.CustomAccordion}>
                <Accordion.Header className={styles.CustomAccordionHdr}>How can I use to manage my travel bookings?</Accordion.Header>
                <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ex imperdiet, mattis libero vel, pharetra felis. Ut id volutpat urna. In molestie velit eu sapien maximus imperdiet. Quisque sit amet ultricies ligula, vel maximus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.CustomAccordion}>
                <Accordion.Header className={styles.CustomAccordionHdr}>How can I use to manage my travel bookings?</Accordion.Header>
                <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ex imperdiet, mattis libero vel, pharetra felis. Ut id volutpat urna. In molestie velit eu sapien maximus imperdiet. Quisque sit amet ultricies ligula, vel maximus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className={styles.CustomAccordion}>
                <Accordion.Header className={styles.CustomAccordionHdr}>How can I use to manage my travel bookings?</Accordion.Header>
                <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ex imperdiet, mattis libero vel, pharetra felis. Ut id volutpat urna. In molestie velit eu sapien maximus imperdiet. Quisque sit amet ultricies ligula, vel maximus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className={styles.CustomAccordion}>
                <Accordion.Header className={styles.CustomAccordionHdr}>How can I use to manage my travel bookings?</Accordion.Header>
                <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ex imperdiet, mattis libero vel, pharetra felis. Ut id volutpat urna. In molestie velit eu sapien maximus imperdiet. Quisque sit amet ultricies ligula, vel maximus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Faq;
