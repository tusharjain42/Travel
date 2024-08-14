"use client";
import React from "react";
import { Form, Card, Image, Nav, Row, Col, InputGroup, DropdownButton, Dropdown} from 'react-bootstrap';
import CountryFlag from 'react-country-flag';
import styles from "@/styles/FlightBooking/FlightBookingLeftSide.module.scss";
function FlightBookingLeftSide() {
  const countries = [
    { code: 'US', name: 'United States', phone: '+1' },
    { code: 'IN', name: 'India', phone: '+91' },
    { code: 'GB', name: 'United Kingdom', phone: '+44' },   
  ];
  return (       
      <div className={styles.FlightBookingLeft}>   
          <div className={styles.FlightTravelerTrip}>   
              <h2 className={styles.FlightTravelerHd}>
                 New Delhi to London 
              </h2>
              <div className={`${styles.FlightTravelerTxt} d-flex flex-wrap align-items-center`}>
                <span>Round-trip · 1 Traveller · Mon Aug 19 - Sun Aug 25</span>
                <Nav.Link href="#" className={styles.FlightTravelerTxtLink}>View Detail</Nav.Link> 
              </div>
          </div>
          <div className={styles.ContentBox}>
            <div className={styles.FlyerHeadingBox}>
              <h2 className={styles.FlightTravelerHd}>
              Who’s Flying?
              </h2>
              <p><strong> Important Note: </strong> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.</p>
            </div>
            <Card className={styles.CardInfo}>
              <div className={`${styles.FlyerNameInfo} d-flex align-items-center`}>
                 <Image src="/assets/user.png" className={"me-3"} alt="img"/> Traveller 1: Adult
              </div> 
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>First names*</Form.Label>
                      <Form.Control className={styles.FormControlGray} type="text" placeholder="" />        
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Last names*</Form.Label>
                      <Form.Control className={styles.FormControlGray} type="text" placeholder="" />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Select your Gender*</Form.Label>      
                      <Form.Select className={styles.FormControlGray}>
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>          
                     </Form.Select>  
                    </Form.Group>    
                    </Col>
                </Row>             
              </Form>
              <p>Enter exactly what's written on this traveller's travel document</p>
            </Card>
            <div className={`${styles.WeightBox} d-flex flex-wrap align-items-center`}>           
              {['checkbox'].map((type) => (
                <div key={`1`} className="CustomCheckBox">
                  <Form.Check                    
                    id={`1`}
                    label={`Add checked bag `}
                    className={styles.CustomCHK}
                  />                   
                </div>
              ))}
              <span className={`${styles.CustomCHKColorText}`}>+ INR7,960.34  Max weight 23 kg</span>        
              <Nav.Link href="#" className={styles.FlightTravelerTxtLink}>View Detail</Nav.Link> 
            </div>
            <Card className={styles.CardInfo}>
              <div className={`${styles.FlyerNameInfo} d-flex align-items-center`}>
                 <Image src="/assets/user.png" className={"me-3"} alt="img"/> Traveller 2: Adult
              </div>
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>First names*</Form.Label>
                      <Form.Control className={styles.FormControlGray} type="text" placeholder="" />        
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Last names*</Form.Label>
                      <Form.Control className={styles.FormControlGray} type="text" placeholder="" />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Select your Gender*</Form.Label>      
                      <Form.Select className={styles.FormControlGray}>
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>                       
                     </Form.Select>  
                    </Form.Group>    
                    </Col>
                </Row>             
              </Form>
              <p>Enter exactly what's written on this traveller's travel document</p>
            </Card>
            <div className={`${styles.WeightBox} d-flex flex-wrap align-items-center`}>           
              {['checkbox'].map((type) => (
                <div key={`2`} className="CustomCheckBox">
                  <Form.Check                   
                    id={`2`}
                    label={`Add checked bag `}
                    className={styles.CustomCHK}
                  />                  
                </div>
              ))}
              <span className={`${styles.CustomCHKColorText}`}>+ INR7,960.34  Max weight 23 kg</span>        
              <Nav.Link href="#" className={styles.FlightTravelerTxtLink}>View Detail</Nav.Link> 
            </div>
          </div>
          <div className={styles.ContentBox}>              
              <h2 className={styles.FlightTravelerHd}>
                Contact Details
              </h2> 
              <Card className={styles.CardInfo}>              
              <Form>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Contact Email*</Form.Label>
                      <Form.Control className={`${styles.FormControlGray} mb-2`} type="text" placeholder="" />        
                      <Form.Text>
                      We will send your flight confirmation here
                      </Form.Text>
                    </Form.Group>
                    </Col>  
                    <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Phone Number*</Form.Label>
                      <InputGroup className="mb-3"> 
                      <DropdownButton
                        className={`${styles.FormControlGray} mb-2`}
                        variant="outline-secondary"
                        id="input-group-dropdown-1"
                        title={
                          <>
                            <CountryFlag countryCode="IN" svg style={{ marginRight: '10px' }} />
                            +91
                          </>
                        }
                      >
                        {countries.map((country, index) => (
                          <Dropdown.Item key={index} href="#">
                            <CountryFlag countryCode={country.code} svg style={{ marginRight: '10px' }} />
                            {country.name} ({country.phone})
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                        <Form.Control className={styles.FormControlGray} />
                      </InputGroup>

                    </Form.Group>
                    </Col> 
                    <Col md={12}>
                        <div className={`${styles.WeightBox} d-flex align-items-center mb-0`}>           
                          {['checkbox'].map((type) => (
                            <div key={`3`} className="CustomCheckBox">
                              <Form.Check                               
                                id={`3`}
                                label={
                                  <>
                                    Also send my booking details on <Nav.Link href="#" className={styles.WhatsAppTxt}>WhatsApp</Nav.Link>
                                  </>
                                }
                                className={styles.CustomCHK}
                              />                  
                            </div>
                          ))}  
                        </div>
                  </Col>        
                </Row>             
              </Form>              
            </Card>
          </div>
          <div className={styles.ContentBox}>              
              <h2 className={styles.FlightTravelerHd}>
              Secure Payment Details
              </h2> 
              <Card className={styles.CardInfo}>              
              <Form>
                <Row>
                  <Col md={12}>
                    <div className={`${styles.PaymentLogo}`}>  
                       <Image src="/assets/payment-option.png" className={"me-3"} alt="img"/>                       
                    </div>    
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.FormLabel}>Name on Card *</Form.Label>
                      <Form.Control className={`${styles.FormControlGray} mb-2`} type="text" placeholder="" />
                    </Form.Group>
                    </Col>  

                    <Col md={5}>
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>Debit/Credit Card Number *</Form.Label>
                        <Form.Control className={`${styles.FormControlGray} mb-2`} type="text" placeholder="" />
                      </Form.Group>
                    </Col>
                    <Col md={5}>
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>Expiration Date *</Form.Label>
                        <Form.Control className={`${styles.FormControlGray} mb-2`} type="text" placeholder="" />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.FormLabel}>CVV *</Form.Label>
                        <Form.Control className={`${styles.FormControlGray} mb-2`} type="text" placeholder="" />
                      </Form.Group>
                    </Col>                     
                    <Col md={12}>
                        <div className={`${styles.WeightBox} d-flex align-items-center mb-0`}>           
                          {['checkbox'].map((type) => (
                            <div key={`4`} className="CustomCheckBox">
                              <Form.Check                                
                                id={`4`}
                                label={
                                  <>
                                     I agree to the <a href="#">Terms and Conditions,</a> and <a href="#">Privacy Policy.</a>
                                  </>
                                }
                                className={styles.CustomCHK}
                              />                  
                            </div>
                          ))}  
                        </div>
                  </Col>         
                </Row>             
              </Form>              
            </Card>
          </div>
         <div className={`${styles.ButtonBottomBox} d-flex flex-wrap align-items-center`}>                          
             <Nav.Link href="#" className={styles.ButtonBottomBack}> <Image src="/assets/back-arrow.png" className={"me-2"} alt="img"/> Back</Nav.Link>
             <Nav.Link href="#" className={styles.SiteBtn}>Confirm Booking</Nav.Link> 
          </div> 
      </div>    
  );
}
export default FlightBookingLeftSide;