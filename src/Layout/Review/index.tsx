"use client";
import React from "react";
import { Nav, Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Review/Review.module.scss";
function ReviewSection() {  
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.ReviewSection}>
        <h3>Guest reviews</h3>
        <div className= {`${styles.ReviewRatingBox} d-flex flex-wrap  align-items-center`}>
          <div className={styles.ReviewRatingValue}>
            4.6
          </div>
          <div className={styles.ReviewPerformanceValue}>
             Very Good  
          </div>
          <div className={styles.ReviewCounter}>
            96 reviews
          </div>
          <Nav.Link href="#" className={styles.ReviewAllLink}>
             Read all reviews
          </Nav.Link>
        </div>
        <Slider {...settings}>
          <div className="item">
            <div className={styles.ReviewSliderCol}>
              <div className= {`${styles.ReviewerProfileBox} d-flex flex-wrap  align-items-center`}>
                 <i className={styles.ReviewerProfilePic}><Image src="/assets/profile-1.png" alt="img"/></i>
                 <div className= {styles.ReviewerProfileContent}>
                     <div className= {`${styles.ReviewerProfileName} d-flex flex-wrap  align-items-center`}>
                          <Nav.Link href="#" className={styles.RoomListColContentHd}>
                          Narayan
                          </Nav.Link>
                          <Image src="/assets/star42.png" alt="img"/>
                      </div>
                      <div className= {`${styles.ReviewerProfileCountry} d-flex flex-wrap  align-items-center`}>
                         <Image src="/assets/flag-1.png" alt="img"/>
                         Australia                          
                      </div>
                 </div>
              </div>
              <p>"The hotel was absolutely amazing 5 star hotel with a lot facilities loved this place</p>
              <Nav.Link href="#" className={styles.ReviewReadMore}>
                Read more
              </Nav.Link>
            </div>
          </div>

          <div className="item">
          <div className={styles.ReviewSliderCol}>
              <div className= {`${styles.ReviewerProfileBox} d-flex flex-wrap  align-items-center`}>
                 <i className={styles.ReviewerProfilePic}><Image src="/assets/profile-2.png" alt="img"/></i>
                 <div className= {styles.ReviewerProfileContent}>
                     <div className= {`${styles.ReviewerProfileName} d-flex flex-wrap  align-items-center`}>
                          <Nav.Link href="#" className={styles.RoomListColContentHd}>
                          Farooq
                          </Nav.Link>
                          <Image src="/assets/star42.png" alt="img"/>
                      </div>
                      <div className= {`${styles.ReviewerProfileCountry} d-flex flex-wrap  align-items-center`}>
                         <Image src="/assets/flag-2.png" alt="img"/>
                         Estonia                          
                      </div>
                 </div>
              </div>
              <p>"The hotel was absolutely amazing 5 star hotel with a lot facilities loved this place"</p>
              <Nav.Link href="#" className={styles.ReviewReadMore}>
                Read more
              </Nav.Link>
            </div>
          </div>

          <div className="item">
          <div className={styles.ReviewSliderCol}>
              <div className= {`${styles.ReviewerProfileBox} d-flex flex-wrap  align-items-center`}>
                 <i className={styles.ReviewerProfilePic}><Image src="/assets/profile-3.png" alt="img"/></i>
                 <div className= {styles.ReviewerProfileContent}>
                     <div className= {`${styles.ReviewerProfileName} d-flex flex-wrap  align-items-center`}>
                          <Nav.Link href="#" className={styles.RoomListColContentHd}>
                          Jeevesh
                          </Nav.Link>
                          <Image src="/assets/star42.png" alt="img"/>
                      </div>
                      <div className= {`${styles.ReviewerProfileCountry} d-flex flex-wrap  align-items-center`}>
                         <Image src="/assets/flag-3.png" alt="img"/>
                         India                          
                      </div>
                 </div>
              </div>
              <p>The hotel is nice clean and tidy the property staff is very polite and helpful"</p>
              <Nav.Link href="#" className={styles.ReviewReadMore}>
                Read more
              </Nav.Link>
            </div>
          </div>

          <div className="item">
          <div className={styles.ReviewSliderCol}>
              <div className= {`${styles.ReviewerProfileBox} d-flex flex-wrap  align-items-center`}>
                 <i className={styles.ReviewerProfilePic}><Image src="/assets/profile-2.png" alt="img"/></i>
                 <div className= {styles.ReviewerProfileContent}>
                     <div className= {`${styles.ReviewerProfileName} d-flex flex-wrap  align-items-center`}>
                          <Nav.Link href="#" className={styles.RoomListColContentHd}>
                          Farooq
                          </Nav.Link>
                          <Image src="/assets/star42.png" alt="img"/>
                      </div>
                      <div className= {`${styles.ReviewerProfileCountry} d-flex flex-wrap  align-items-center`}>
                         <Image src="/assets/flag-2.png" alt="img"/>
                         Estonia                          
                      </div>
                 </div>
              </div>
              <p>"The hotel was absolutely amazing 5 star hotel with a lot facilities loved this place"</p>
              <Nav.Link href="#" className={styles.ReviewReadMore}>
                Read more
              </Nav.Link>
            </div>
          </div>
          
         
        </Slider>

    </div>    
  );
}
export default ReviewSection;