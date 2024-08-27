"use client";
import React, { useState } from "react";
import { Row, Col, Nav, Image, Form } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "@/styles/RoomList/RoomList.module.scss";
function RoomListing() {  
  const [selectedOption, setSelectedOption] = useState('6');
  const handleChange = (event) => {
    setSelectedOption(event.target.id);
  };
 
  return ( 
    <div className={styles.RoomListPanel}>
      <h3>Room 1: (2 adults)</h3>  
      <Row className={styles.RoomListRow}>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-1.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="6"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '6'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="7"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '7'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-2.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="8"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '8'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="9"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '9'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-3.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="10"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '10'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="11"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '11'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-4.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="12"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '12'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="13"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '13'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-5.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="14"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '14'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="15"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '15'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
            <Col xl={4} md={6} className={styles.RoomListLoop}>
                <div className={styles.RoomListCol}>                    
                    <Nav.Link href="#" className={styles.RoomListFigure}>
                        <Image src="/assets/room-6.jpg" alt="img"/>
                    </Nav.Link>  
                    <div className={styles.RoomListColContent}> 
                      <Nav.Link href="#" className={styles.RoomListColContentHd}>
                        Superior Room, 1 King Bed, Balcony, Lagoon View
                      </Nav.Link>
                      <ListGroup as="ul" className= {`${styles.RoomServicesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> Reserve now, pay later </ListGroup.Item>
                        <ListGroup.Item as="li"> Resort credit included</ListGroup.Item>                          
                      </ListGroup>
                      <ListGroup as="ul" className= {`${styles.RoomAmenitiesList} d-flex flex-wrap`}>
                        <ListGroup.Item as="li"> <i><Image src="/assets/wi-fi.png" alt="img"/></i>  Wi-Fi</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/parking.png" alt="img"/></i>  Free self parking</ListGroup.Item>
                        <ListGroup.Item as="li"> <i><Image src="/assets/sleep.png" alt="img"/></i>  Sleeps 2</ListGroup.Item>    
                        <ListGroup.Item as="li"> <i><Image src="/assets/lagoon.png" alt="img"/></i>  Lagoon view</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/measure.png" alt="img"/></i>  517 sq ft</ListGroup.Item> 
                        <ListGroup.Item as="li"> <i><Image src="/assets/king-bed.png" alt="img"/></i>  1 King Bed</ListGroup.Item>              
                      </ListGroup>
                      <div className={styles.RoomRefundableText}>
                        <Nav.Link href="#" className= {`${styles.RoomRefundableLink} d-flex flex-wrap align-items-center`}>
                          Fully refundable <i><Image src="/assets/info.png" alt="img"/></i>
                        </Nav.Link>
                        Before Fri, 9 Aug
                      </div>
                      <Nav.Link href="#" className={styles.RoomListMoreDetail}>
                          More Detail
                      </Nav.Link>
                      <div className={styles.RoomCategoriesText}>
                        <div className={styles.RoomCategoriesTextHd}>
                          Grand Baie
                        </div> 
                        The Villas of Clos du Littoral have been designed with families and couples in mind and feature...                  
                      </div>

                      <div className={styles.RoomPriceRow}>
                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="16"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label={
                                  <>
                                    Breakfast buffet + Special deal
                                    <Nav.Link href="#" className={styles.MoreLink}>More Detail</Nav.Link>
                                  </>
                                }
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '16'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹0</div>
                          </div>

                          <div className={`${styles.RoomPriceCol} d-flex align-items-center`}>
                            <div className="CustomRadioBox">
                              <Form.Check
                                id="17"
                                name="RoomPriceRowGroup"
                                type="radio"
                                label="Half board"
                                className={styles.CustomRadioBox}
                                checked={selectedOption === '17'}
                                onChange={handleChange}
                              />
                            </div>
                            <div className={styles.RoomRadioPrice}>+ ₹3,000</div>
                          </div>
                      </div>

                      <div className= {`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}>
                        <div className= {styles.RoomFinalPriceLeft}>
                            <div className= {styles.RoomFinalPriceBig}>
                              INR20,000
                            </div>
                            <div className= {styles.RoomFinalPriceSmall}>
                            ₹23,600 total
                            </div>
                            <div className= {styles.TaxesText}>
                            includes taxes & fees
                            </div>
                        </div>
                        <Nav.Link href="#" className={styles.SiteBtn}>
                        Reserve
                        </Nav.Link>
                      </div>

                    </div>                   
                </div>
            </Col>
      </Row>
    </div>
  );
}
export default RoomListing;
