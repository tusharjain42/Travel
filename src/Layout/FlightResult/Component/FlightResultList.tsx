"use client";

import { useState } from "react";
import { Image, Modal, Form } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/FlightResult/FlightResultList.module.scss";

function FlightResultList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.FlightOuter}>
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
      <div className={styles.FlightResult}>
        <div className={styles.FlightInfoBlock}>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
        </div>
        <div className={styles.FlightCost}>
          <div className={styles.CenterBox}>
            Starting from <b>INR91,088.00</b>
            <Link href={"#"} className={styles.DetailBtn} onClick={handleShow}>
              View Detail
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FlightResult}>
        <div className={styles.FlightInfoBlock}>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
        </div>
        <div className={styles.FlightCost}>
          <div className={styles.CenterBox}>
            Starting from <b>INR91,088.00</b>
            <Link href={"#"} className={styles.DetailBtn}>
              View Detail
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FlightResult}>
        <div className={styles.FlightInfoBlock}>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
        </div>
        <div className={styles.FlightCost}>
          <div className={styles.CenterBox}>
            Starting from <b>INR91,088.00</b>
            <Link href={"#"} className={styles.DetailBtn}>
              View Detail
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FlightResult}>
        <div className={styles.FlightInfoBlock}>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
          <div className={styles.FlightResultRow}>
            <div className={styles.FlightName}>
              <Image src="/assets/flight-logo.jpg" alt="img" />
              <span>Air India</span>
            </div>
            <div className={styles.FlightTime}>
              <span className={styles.Timming}>
                <b>6:45 AM</b>DEL - Aug 19
              </span>
              <div className={styles.FlightType}>
                <span>9h 15m</span>
                <span>Direct</span>
              </div>
              <span className={styles.Timming}>
                <b>6:45 AM</b>Lon - Aug 20
              </span>
            </div>
          </div>
        </div>
        <div className={styles.FlightCost}>
          <div className={styles.CenterBox}>
            Starting from <b>INR91,088.00</b>
            <Link href={"#"} className={styles.DetailBtn}>
              View Detail
            </Link>
          </div>
        </div>
      </div>

      <Modal className="FlightDetailModal" show={show} onHide={handleClose}>
        <div className={styles.FlightDetailPopup}>
          <div className={styles.ModalContent}>
            <div className={styles.ModalHead}>
              <h4>Your flight to London</h4>
              <Link
                href={"#_"}
                className={styles.CloseModal}
                onClick={handleClose}
              >
                <Image src="/assets/close-icon.png" alt="close-icon" />
              </Link>
            </div>
            <div className={styles.FlightInfo}>
              <h4>Flight to London</h4>
              <p>Direct · 9h 15m</p>
              <div className={styles.FlightDetail}>
                <div className={styles.FlightTimingBlock}>
                  <div className={styles.FlightDateTime}>
                    <i>
                      <Image src="/assets/departure.png" alt="img" />
                    </i>
                    <p>
                      Mon, Aug 19 · 2:45 AM{" "}
                      <b>DEL · Delhi International Airport</b>
                    </p>
                  </div>
                  <div className={styles.FlightDateTime}>
                    <i>
                      <Image src="/assets/arrivals.png" alt="img" />
                    </i>
                    <p>
                      Mon, Aug 19 · 7:30 AM <b>LHR · London Heathrow Airport</b>
                    </p>
                  </div>
                </div>
                <div className={styles.FlightName}>
                  <i>
                    <Image src="/assets/flight-logo.jpg" alt="img" />
                  </i>
                  <p>Air India AI161 · Economy</p>
                </div>
              </div>
            </div>
            <div className={styles.FlightInfo}>
              <h4>Flight to New Delhi</h4>
              <p>Direct · 8h 20m</p>
              <div className={styles.FlightDetail}>
                <div className={styles.FlightTimingBlock}>
                  <div className={styles.FlightDateTime}>
                    <i>
                      <Image src="/assets/departure.png" alt="img" />
                    </i>
                    <p>
                      Mon, Aug 19 · 2:45 AM{" "}
                      <b>DEL · Delhi International Airport</b>
                    </p>
                  </div>
                  <div className={styles.FlightDateTime}>
                    <i>
                      <Image src="/assets/arrivals.png" alt="img" />
                    </i>
                    <p>
                      Mon, Aug 19 · 7:30 AM <b>LHR · London Heathrow Airport</b>
                    </p>
                  </div>
                </div>
                <div className={styles.FlightName}>
                  <i>
                    <Image src="/assets/flight-logo.jpg" alt="img" />
                  </i>
                  <p>Air India AI161 · Economy</p>
                </div>
              </div>
            </div>
            <div className={styles.FlightOtherInfo}>
              <div className={styles.InfoBlock}>
                <h4>
                  Baggage <span>The total baggage included in the price</span>
                </h4>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <i>
                      <Image src="/assets/baggage-icon1.png" alt="img" />
                    </i>
                    <p>
                      1 personal item
                      <br />
                      Fits under the seat in front of you
                    </p>
                  </div>
                  <span className={styles.BaggageTag}>Included</span>
                </div>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <i>
                      <Image src="/assets/baggage-icon2.png" alt="img" />
                    </i>
                    <p>
                      1 carry-on bag
                      <br />
                      20 x 40 x 55 cm · Max weight 7 kg
                    </p>
                  </div>
                  <span className={styles.BaggageTag}>Included</span>
                </div>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <i>
                      <Image src="/assets/baggage-icon3.png" alt="img" />
                    </i>
                    <p>
                      2 checked bags
                      <br />
                      Max weight 23 kg
                    </p>
                  </div>
                  <span className={styles.BaggageTag}>Included</span>
                </div>
              </div>
              <div className={styles.InfoBlock}>
                <h4>Extras you might like</h4>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <i>
                      <Image src="/assets/extra-icon.png" alt="img" />
                    </i>
                    <p>
                      Flexible ticket
                      <br />
                      Date change possible
                      <br />
                      +INR11,841.44 for all travelers
                    </p>
                  </div>
                  <span className={styles.AvailableTag}>
                    Available in the next steps
                  </span>
                </div>
              </div>
              <div className={styles.InfoBlock}>
                <h4>Price breakdown</h4>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <span className={styles.LabelText}>Ticket (1 adult)</span>
                  </div>
                  <span className={styles.TicketPrice}>
                    <b>INR91,088.00</b>
                  </span>
                </div>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <span className={styles.LabelText}>Flight fare</span>
                  </div>
                  <span className={styles.TicketPrice}>INR54,320.00</span>
                </div>
                <div className={styles.BaggageInfo}>
                  <div className={styles.BaggageLeftInfo}>
                    <span className={styles.LabelText}>Taxes and fees</span>
                  </div>
                  <span className={styles.TicketPrice}>INR36,768.00</span>
                </div>
              </div>
            </div>
            <div className={styles.TotalPriceBlock}>
              <p>
                Total<b>INR91,088.00</b>Includes taxes and charges
              </p>
              <Link href={"#"} className={styles.SelectBtn}>
                Select
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FlightResultList;
