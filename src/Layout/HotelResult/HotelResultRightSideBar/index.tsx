"use client";

import React from "react";
import { Form, Card, CardGroup, Figure, Nav, Image, ListGroup } from 'react-bootstrap';
import styles from "@/styles/HotelResult/HotelResultRightSideBar.module.scss";


function HotelResultRightSideBar() {
  return (
    
      <div className={styles.HotelRightSideBar}>
          <h1> New Delhi: 1,824 properties found </h1>
          <div className={`${styles.HotelSortBox} d-flex align-items-center flex-wrap mb-4`}>
            <p>Prices displayed include taxes and may change based on availability. You can review any additional fees before checkout. Prices are not final until you complete your purchase.</p>
            <div className={styles.HotelSortItem}>
              <div className={styles.HotelSortLabel}>Sort by</div>             
              <Form.Select>
                <option>Recommended</option>
                <option value="1">Low to High</option>
                <option value="2">High to low</option>
                <option value="3">Lowest price</option>
              </Form.Select>
            </div>
          </div>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap `}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-1.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>The Seven Inn Near Delhi Airport</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap `}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-2.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>Kenilworth Beach Resort Hotel</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap `}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-3.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>Kenilworth Beach Resort Hotel</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap`}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-4.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>The Seven Inn Near Delhi Airport</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap`}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-5.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>Kenilworth Beach Resort Hotel</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
          <CardGroup className={`${styles.HotelList} d-flex flex-wrap mb-4`}>
            <Card className={`${styles.HotelInfo} d-flex flex-wrap`}>
              <Figure className={styles.HotelInfoImg}>
                <Image src="/assets/hotel-img-6.jpg" alt="img"/>
              </Figure> 
              <div className={styles.HotelContentPanel}>
                 <Nav.Link href="#" className={styles.HotelContentHeading}>The Seven Inn Near Delhi Airport</Nav.Link> 
                 <div className= {`${styles.HoteLocationBox} d-flex flex-wrap`}>
                  <div className={`${styles.HotelLocationText}`}> 
                    <Image src="/assets/location-black.png" alt="img"/> Arossim, Goa, India
                  </div>
                  <a href="#" className={styles.hotellocationMapLink}>Show on map</a>
                 </div>
                 <div className= {styles.HotelRatingBox}>
                   <Image src="/assets/rating-1.png" alt="img"/>                
                   <div className={`${styles.HotelRatingParameter} d-flex flex-wrap align-items-center`}>
                    <span className={`${styles.HotelRatingValue} pe-2`}>4.5</span>
                     <Image src="/assets/trust-plt.png" className={"pe-2"} alt="img"/>
                     1,933 reviews
                   </div>
                </div>
                <div className={styles.HotelSizeText}>One-Bedroom Apartment</div>
                <ListGroup as="ul" className= {`${styles.HotelServicesList} d-flex flex-wrap`}>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-1.png" alt="img"/> Breakfast Included</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-2.png" alt="img"/> Pool</ListGroup.Item>
                  <ListGroup.Item as="li"> <Image src="/assets/hotel-services-icon-3.png" alt="img"/> Hot Tub</ListGroup.Item>                 
                </ListGroup>
              </div> 
            </Card>
            <Card className={styles.HotelPrice}>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>1 night, 3 adults, 1 child</div>
              <div className={styles.HotelPriceValue}>£8,00</div>
              <div className={`${styles.HotelPriceLabel} mb-2 mb-lg-3`}>INR 27,140 total  <br /> includes taxes & fees</div>             
              <Nav.Link href="#" className={styles.SiteBtn}>See Availability</Nav.Link> 
            </Card>
          </CardGroup>
      </div>
    
  );
}

export default HotelResultRightSideBar;
