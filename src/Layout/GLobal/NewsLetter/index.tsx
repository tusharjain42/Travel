import React from "react";
import styles from "@/styles/NewsLetter.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewsLetter() {
  return (
    <div className={styles.NewsLetterOuter}>
      <div className={"container"}>
        <Row className={"align-items-center"}>
          <Col md={6}>
            <div className={`${styles.NewsLetterLeft} d-flex align-items-center`}>
              <i><Image src="/assets/icon7.png" alt="" /></i>
              <div className={styles.NewsLetterCard}>
                <p>Get the latest news and offers</p>
                <h4>Subscribe to our newsletter</h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.NewsLetterRight}>
               <Form>
                    <Form.Control
                        type="text"
                        id="input5"
                        aria-describedby="input5"
                        placeholder="Enter your email address"
                        className={styles.NewsLetterInput}
                    />
                    <Button className={styles.NewsLetterBtn}>Subscribe</Button>
               </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewsLetter;
