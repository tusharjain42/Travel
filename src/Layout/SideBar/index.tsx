"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import styles from "@/styles/SideBar/SideBar.module.scss";
import MultiRangeSlider from "@/Layout/SideBar/MultiRangeSlider";
 
function SideBar() {
  return (
    <div className={styles.SideBarBlock}>
      <Accordion defaultActiveKey="10">
        <Accordion.Item eventKey="10" className={styles.TitleAccordian}>
          <Accordion.Header className={styles.TitleAccordionHdr}>
            <h4>Filter By</h4>
            <p>Showing 798 results</p>
          </Accordion.Header>
          <Accordion.Body className={styles.TitleAccordionBody}>
            <div className={styles.SideBarAccordianBlock}>
              <Accordion defaultActiveKey={['1','2','3','4','5','6','7','8','9','10']} alwaysOpen>
                <Accordion.Item eventKey="1" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Your budget (per night)
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.CustompPrice}>₹ 500 – ₹ 10,000+</div>
                    <div className={styles.SideCheckList}>
                      <div className={styles.RangeBar}>
                      <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                  />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Star rating
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-4`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`5 Stars`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <Link href={"#"}>
                                  <Image src="/assets/star.png" alt="img" />
                                </Link>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-5`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`4 Stars`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <Link href={"#"}>
                                  <Image src="/assets/star-4.png" alt="img" />
                                </Link>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-6`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`3 Stars`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <Link href={"#"}>
                                  <Image src="/assets/star-3.png" alt="img" />
                                </Link>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-7`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Below 3 Star`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <Link href={"#"}>
                                  <Image src="/assets/star-2.png" alt="img" />
                                </Link>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Guest rating
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-8`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`4.5 & above (Excellent)`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>11,810</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-9`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`4 & above (Very Good)`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>569</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-10`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`3 & above (Good)`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>976</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Popular filters
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check type={type} id={`inline-${type}-11`} className={styles.CustomCHK}>
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Hotel`}</Form.Check.Label>
                              <Form.Control.Feedback type="valid" className={styles.SubText}><p>1235</p></Form.Control.Feedback>
                            </Form.Check>

                            <Form.Check type={type} id={`inline-${type}-12`} className={styles.CustomCHK}>
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Resort`}</Form.Check.Label>
                              <Form.Control.Feedback type="valid" className={styles.SubText}><p>569</p></Form.Control.Feedback>
                            </Form.Check>

                            <Form.Check type={type} id={`inline-${type}-13`} className={styles.CustomCHK}>
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Guest house`}</Form.Check.Label>
                              <Form.Control.Feedback type="valid" className={styles.SubText}><p>976</p></Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                      <Link href={"#_"} className={styles.ShowMore}>
                        Show all
                        <Image src="/assets/show-more-arrow.png" className={`ms-2`} alt="img"/>
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Amenities
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-14`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>
                                <Image
                                  src="/assets/wifi.png"
                                  className={`me-1`}
                                  alt="img"
                                />
                                {`Hotel`}
                              </Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>1235</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-15`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>
                                <Image
                                  src="/assets/poll.png"
                                  className={`me-1`}
                                  alt="img"
                                />
                                {`Parking`}
                              </Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>569</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-16`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>
                                <Image
                                  src="/assets/hotel-services-icon-2.png"
                                  className={`me-1`}
                                  alt="img"
                                />
                                {`Pool`}
                              </Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>976</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                      <Link href={"#_"} className={styles.ShowMore}>
                        Show all
                        <Image
                          src="/assets/show-more-arrow.png"
                          className={`ms-2`}
                          alt="img"
                        />
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Chains
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-17`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Accor - Novotel & ibis`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>1235</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-18`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`AM Hotel Kollection`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>569</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-19`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Clarks Inn`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>976</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                      <Link href={"#_"} className={styles.ShowMore}>
                        Show all
                        <Image
                          src="/assets/show-more-arrow.png"
                          className={`ms-2`}
                          alt="img"
                        />
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Cancellation policy
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-20`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Free cancellation`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>11,810</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-21`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Non refundable`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>569</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Stops
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-1`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Direct`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>From INR91,088.00</p>
                                <span>36</span>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-2`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`1 stop`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>From INR91,088.00</p>
                                <span>527</span>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-3`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`2+ stops`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>From INR91,188.00</p>
                                <span>736</span>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Time Preference
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <div className={styles.TimePrefrence}>
                        <label>Departure</label>
                        <div className={styles.TimeFrame}>
                          <ListGroup className={styles.TimeList}>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/sunrise-icon.png" alt="img" />
                              <span>00:00 to 06:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={`${styles.ListItem} ${styles.Active}`}>
                              <Image src="/assets/sun-icon.png" alt="img" />
                              <span>06:00 to 12:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/cludy-icon.png" alt="img" />
                              <span>12:00 to 18:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/moon-icon.png" alt="img" />
                              <span>12:00 to 18:00</span>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>
                      </div>
                      <div className={styles.TimePrefrence}>
                        <label>Arrival</label>
                        <div className={styles.TimeFrame}>
                          <ListGroup className={styles.TimeList}>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/sunrise-icon.png" alt="img" />
                              <span>00:00 to 06:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/sun-icon.png" alt="img" />
                              <span>06:00 to 12:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/cludy-icon.png" alt="img" />
                              <span>12:00 to 18:00</span>
                            </ListGroup.Item>
                            <ListGroup.Item className={styles.ListItem}>
                              <Image src="/assets/moon-icon.png" alt="img" />
                              <span>12:00 to 18:00</span>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Airlines
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-4`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Select All`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <Link href={"#"}>Clear all</Link>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-5`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Air India`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>₹ 11,810</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                            <Form.Check
                              type={type}
                              id={`inline-${type}-6`}
                              className={styles.CustomCHK}
                            >
                              <Form.Check.Input type={type} isValid />
                              <Form.Check.Label>{`Air India Express`}</Form.Check.Label>
                              <Form.Control.Feedback
                                type="valid"
                                className={styles.SubText}
                              >
                                <p>₹ 9,825</p>
                              </Form.Control.Feedback>
                            </Form.Check>
                          </div>
                        ))}
                      </Form>
                      <Link href={"#_"} className={styles.ShowMore}>
                      Show all
                        <Image src="/assets/show-more-arrow.png" alt="img" />
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideBar;
