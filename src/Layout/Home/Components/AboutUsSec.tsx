"use client";
import React from "react";
import Image from "next/image";
import "../../../styles/Home/AboutUsSec.scss";
import { Col, Row } from "react-bootstrap";


const AboutUsSec: React.FC = () => {
  return (
    <div className="aboutUsSec" id="aboutUsSec">
      <div className={"container"}>
        <Row>
          <Col md={12} lg={6}>
            <div className="aboutUsSecImg">
              <Image
                alt=""
                width={645}
                height={538}
                src="/assets/about_sec_img.png"
              />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="rightCol">
              <div className="heading">
                <span>About Us</span>
                <h2>Discover Limitless<br/> Possibilities with Us</h2>
              </div>
              <div className="aboutUsSecPoints">
                <div className="aboutUsSecItem">
                  <i>
                    <Image
                      width={29}
                      height={35}
                      src="/assets/check_shield_icon.png"
                      alt=""
                    />
                  </i>
                  <div className="text">
                    <h5>Excellent Security</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="aboutUsSecItem">
                  <i>
                    <Image
                      width={29}
                      height={35}
                      src="/assets/tag_label_icon.png"
                      alt=""
                    />
                  </i>
                  <div className="text">
                    <h5>Cost Efficiency</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="aboutUsSecItem">
                  <i>
                    <Image
                      width={29}
                      height={35}
                      src="/assets/globe_icon.png"
                      alt=""
                    />
                  </i>
                  <div className="text">
                    <h5>World Wide Route</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUsSec;
