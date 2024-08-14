"use client";
import React from "react";
import { Form, Card, InputGroup, Nav, Button} from 'react-bootstrap';
import styles from "@/styles/FlightBooking/FlightBookingRightSide.module.scss";
function FlightBookingRightSide() {
  return (    
      <div className={styles.FlightBookingRight}>
         <Card className={`${styles.CardInfo} ${styles.CardInfoGray}`}>
          <div className={`${styles.FlightTravelerHdOut} d-flex align-items-center`}>
              <h2 className={`${styles.FlightTravelerHd} mb-0 me-3`}>
              Price breakdown
              </h2>
              <Nav.Link href="#" className={styles.FlightTravelerTxtLink}>View breakdown</Nav.Link> 
          </div>
          <div className={`${styles.PriceBreakDownBox}`}>
              <div className={`${styles.PriceBreakDownRow} d-flex align-items-center`}>
                  <div className={styles.PriceBreakDownColL}>
                    Tickets (2 adults, 2 children)
                  </div>
                  <div className={styles.PriceBreakDownColR}>
                      <strong>INR91,088.00</strong>
                  </div>
              </div>
              <div className={`${styles.PriceBreakDownRow} d-flex align-items-center`}>
                  <div className={styles.PriceBreakDownColL}>
                  Flight fare
                  </div>
                  <div className={styles.PriceBreakDownColR}>
                    INR54,320.00
                  </div>
              </div>
              <div className={`${styles.PriceBreakDownRow} d-flex align-items-center`}>
                  <div className={styles.PriceBreakDownColL}>
                  Taxes and fees
                  </div>
                  <div className={styles.PriceBreakDownColR}>
                  INR36,768.00
                  </div>
              </div>
              <div className={`${styles.PriceBreakDownRow} d-flex align-items-center`}>
                  <div className={styles.PriceBreakDownColL}>
                    <strong>Checked bag</strong>
                  </div>
                  <div className={styles.PriceBreakDownColR}>
                      <strong>INR7,960.34</strong>
                  </div>
              </div>
            </div>

            <div className={`${styles.PriceTotalBox} d-flex align-items-center`}>
                <div className={styles.PriceTotalLeft}>
                  <div className={styles.PriceTotalHd}>Total</div>
                  <div className={styles.PriceTotalSubTxt}>Includes taxes and charges</div>
                </div>
                <div className={styles.PriceTotalRight}>
                    INR91,088.00
                </div>
            </div>
         </Card>
         <Card className={styles.CardInfo}>        
            <h2 className={`${styles.FlightTravelerHd} mb-3`}>
              Select a Promo Code
            </h2> 
            <InputGroup className={`${styles.FormControlGray} ${styles.FormControl} mb-2`}>
              <Form.Control
                placeholder="Enter your Promo code "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button>
                  Apply
              </Button>
            </InputGroup>
            <div className={styles.CouponRow}>
              <div className={`${styles.CouponCol}`}>
                {['radio'].map((type) => (
                  <div key={`6`} className="CustomRadioBox">
                    <Form.Check         
                      id={`6`}
                      name="couponGroup"
                      label={
                        <>
                          <span className={styles.CouponCode}>FLYMONSOON</span> <br/>
                          Flat 10% OFF (up to Rs. 700). Valid with all cards and wallets.              
                          <Nav.Link href="#" className={styles.TermsLink}>Terms & Conditions Apply</Nav.Link> 
                        </>
                      }
                      className={styles.CustomRadioBox}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.CouponCol}`}>
                {['radio'].map((type) => (
                  <div key={`7`} className="CustomRadioBox">
                    <Form.Check         
                      id={`7`}
                      name="couponGroup"
                      label={
                        <>
                          <span className={styles.CouponCode}>HAPPYMOON</span> <br/>
                          Flat 10% OFF (up to Rs. 700). Valid with all cards and wallets.             
                          <Nav.Link href="#" className={styles.TermsLink}>Terms & Conditions Apply</Nav.Link> 
                        </>
                      }
                      className={styles.CustomRadioBox}
                    />
                  </div>
                ))}
              </div>
            </div>            
         </Card>         
      </div>    
  );
}
export default FlightBookingRightSide;
