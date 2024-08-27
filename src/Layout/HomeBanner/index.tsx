"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/HomeBanner/HomeBanner.module.scss";
import {
  Nav,
  Tab,
  Image,
  Form,
  Button,
  ListGroup,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import HomeBnrCard from "@/Layout/HomeBanner/HomeBnrCard";
import AirportSearch from "@/utils/airportSearch";

interface AirportPayload {
  term: string;
  from?: string;
  to?: string;
  departureDate?: string;
  returnDate?: string;
}

interface ApiResponse {
  error: boolean;
  data: any[];
  message: string;
  code: number;
  status: boolean;
}

const cityCodeMap: Record<string, string> = {
  "Delhi International Airport": "DEL",
  "Mumbai International Airport": "BOM",
  // "Bengaluru International Airport": "BLR",
  // "Chennai International Airport": "MAA",
  // "Jaipur International Airport": "JPR",
  // "Rajiv Gandhi International Airport": "HYD",
  // "Pune Airport": "PNQ",
  // "Goa International Airport": "GOI",
  // "Sardar Vallabhbhai Patel International Airport": "AMD",
  // "Cochin International Airport": "COK",
  // "Sri Guru Ram Dass Jee International Airport": "ATQ",
  // "Chandigarh Airport": "IXC",
};

const fromCityCodeMap: Record<string, string> = {
  "Delhi International Airport": "DEL",
  "Mumbai International Airport": "BOM",
  // "Bengaluru International Airport": "BLR",
  // "Chennai International Airport": "MAA",
  // "Jaipur International Airport": "JPR",
  // "Rajiv Gandhi International Airport": "HYD",
  // "Pune Airport": "PNQ",
  // "Goa International Airport": "GOI",
  // "Sardar Vallabhbhai Patel International Airport": "AMD",
  // "Cochin International Airport": "COK",
  // "Sri Guru Ram Dass Jee International Airport": "ATQ",
  // "Chandigarh Airport": "IXC",
};

const cityList = Object.entries(cityCodeMap).map(([cityName, cityCode]) => ({
  name: cityName,
  code: cityCode,
}));

const fromCityList = Object.entries(fromCityCodeMap).map(
  ([cityName, cityCode]) => ({
    name: cityName,
    code: cityCode,
  })
);

function HomeBanner() {
  const [term, setTerm] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [fromSuggestions, setFromSuggestions] = useState<City[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] =
    useState<boolean>(false);
  const [tripType, setTripType] = useState<string>("Round Trip");

  useEffect(() => {
    if (term) {
      const filteredSuggestions = cityList.filter(
        (city) =>
          city.name.toLowerCase().includes(term.toLowerCase()) ||
          city.code.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [term]);

  useEffect(() => {
    if (from) {
      const filteredFromSuggestions = fromCityList.filter(
        (city) =>
          city.name.toLowerCase().includes(from.toLowerCase()) ||
          city.code.toLowerCase().includes(from.toLowerCase())
      );
      setFromSuggestions(filteredFromSuggestions);
      setShowFromSuggestions(filteredFromSuggestions.length > 0);
    } else {
      setFromSuggestions([]);
      setShowFromSuggestions(false);
    }
  }, [from]);

  const handleSearch = async () => {
    const processedPayload: AirportPayload = {
      term: cityCodeMap[term] || term,
      from: fromCityCodeMap[from] || from,
      to: fromCityCodeMap[to] || to,
      departureDate,
      returnDate,
    };

    try {
      const response: ApiResponse = await AirportSearch(processedPayload);
      if (response.error) {
        setErrorMessage(response.message);
        setSearchResults([]);
      } else {
        setSearchResults(response.data);
        setErrorMessage(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("An error occurred while fetching data.");
    }
  };

  const handleSuggestionClick = (city: City) => {
    setTerm(city.name);
    setTo(city.name);
    setShowSuggestions(false);
  };

  const handleFromSuggestionClick = (city: City) => {
    setFrom(city.name);
    setShowFromSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleFromInputFocus = () => {
    setShowFromSuggestions(true);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFromInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTimeout(() => setShowFromSuggestions(false), 200);
  };

  return (
    <div className={styles.BannerHome}>
      <div className="container">
        <div className={`${styles.BannerHeading} text-center`}>
          <h1>
            Let's Explore The <span>World Together</span>
          </h1>
          <h6>A Solution to find the most optimized itinerary for you</h6>
        </div>
        <div className={styles.HomeSearch}>
          <Tab.Container defaultActiveKey="Flights">
            <Nav className={styles.TabNav} variant="tabs">
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Flights" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/icon.png" alt="img" />
                  </i>
                  <span>Flights</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Hotels" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/icon1.png" alt="img" />
                  </i>
                  <span>Hotels</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Car" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/car-icon.png" alt="img" />
                  </i>
                  <span>Car</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Cruises" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/cruise-icon.png" alt="img" />
                  </i>
                  <span>Cruises</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="Flights">
                <div className={styles.TripBlock}>
                  <Form>
                    <div>
                      <Form.Check
                        className={styles.CustomCHK}
                        inline
                        label="One-Way"
                        name="tripType"
                        type="radio"
                        id="inline-radio-1"
                        checked={tripType === "One-Way"}
                        onChange={() => setTripType("One-Way")}
                      />
                      <Form.Check
                        className={styles.CustomCHK}
                        inline
                        label="Round Trip"
                        name="tripType"
                        type="radio"
                        id="inline-radio-2"
                        checked={tripType === "Round Trip"}
                        onChange={() => setTripType("Round Trip")}
                      />
                      <Form.Check
                        className={styles.CustomCHK}
                        inline
                        label="Multi-city"
                        name="tripType"
                        type="radio"
                        id="inline-radio-3"
                        checked={tripType === "Multi-city"}
                        onChange={() => setTripType("Multi-city")}
                      />
                    </div>
                  </Form>
                </div>
                <div
                  className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}
                >
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div className={`${styles.FormCard} ${styles.FrmWd1}`}>
                      <Form>
                        <Form.Group controlId="from1">
                          <Form.Label className={styles.SrchLabel}>
                            From
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Where from?"
                            className={styles.SrchInput}
                            value={from}
                            onChange={(e) => {
                              setFrom(e.target.value);
                              setShowFromSuggestions(true);
                            }}
                            onFocus={handleFromInputFocus}
                            onBlur={handleFromInputBlur}
                          />
                          {showFromSuggestions &&
                            fromSuggestions.length > 0 && (
                              <ListGroup className={styles.SuggestionList}>
                                {fromSuggestions.map((city, index) => (
                                  <ListGroup.Item
                                    key={index}
                                    onClick={() =>
                                      handleFromSuggestionClick(city)
                                    }
                                    className={styles.SuggestionItem}
                                  >
                                    {city.name} ({city.code})
                                  </ListGroup.Item>
                                ))}
                              </ListGroup>
                            )}
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd2}`}>
                      <Form>
                        <Form.Group controlId="term">
                          <Form.Label className={styles.SrchLabel}>
                            To
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Where to?"
                            className={styles.SrchInput}
                            value={term}
                            onChange={(e) => {
                              setTerm(e.target.value);
                              setShowSuggestions(true);
                            }}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          {showSuggestions && suggestions.length > 0 && (
                            <ListGroup className={styles.SuggestionList}>
                              {suggestions.map((city, index) => (
                                <ListGroup.Item
                                  key={index}
                                  onClick={() => handleSuggestionClick(city)}
                                  className={styles.SuggestionItem}
                                >
                                  {city.name} ({city.code})
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          )}
                        </Form.Group>
                      </Form>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} d-md-flex`}
                    >
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}
                      >
                        <Form>
                          <Form.Group controlId="departure1">
                            <Form.Label className={styles.SrchLabel}>
                              Departure
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Select Date"
                              className={styles.SrchInput}
                              value={departureDate}
                              onChange={(e) => setDepartureDate(e.target.value)}
                              disabled={tripType === "One-Way" ? false : true}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      {(tripType === "Round Trip" ||
                        tripType === "Multi-city") && (
                        <div
                          className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}
                        >
                          <Form>
                            <Form.Group controlId="return1">
                              <Form.Label className={styles.SrchLabel}>
                                Return
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Select Date"
                                className={styles.SrchInput}
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      )}
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd4}`}>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="TravellersDropdown"
                          className={styles.TrvlBtn}
                        >
                          Travellers <span>2 Adults</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.TrvlDropDown}>
                          <div className={styles.TrvlTopBox}>
                            <Form.Group
                              className={`${styles.inputPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Label htmlFor=""></Form.Label>
                              dfgfgf
                            </Form.Group>
                          </div>
                          <div className={styles.TrvlBtmBox}>
                            <Button className={styles.ApplyBtn}>Apply</Button>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd5} ${styles.Bdr0}`}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          id="ClassDropdown"
                          className={styles.TrvlBtn}
                        >
                          Class <span>Economy</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Economy</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Premium Economy
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Business Class</Dropdown.Item>
                          <Dropdown.Item href="#">First Class</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className={styles.SearchBtnBlock}>
                    <Button className={styles.SrchBtn} onClick={handleSearch}>
                      <Image src="/assets/search-icon.png" alt="" />
                      <span>Search</span>
                    </Button>
                  </div>
                </div>
                <div className={styles.FlexibleBox}>
                  <Form>
                    <Form.Check
                      label="I'm flexible with dates"
                      type="switch"
                      id="flexible-switch"
                      className={styles.SwitchBtn}
                    />
                  </Form>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Hotels">
                <div
                  className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}
                >
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd1} ${styles.FrmWd11}`}
                    >
                      <Form>
                        <Form.Group controlId="going1">
                          <Form.Label className={styles.SrchLabel}>
                            Going to
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New Delhi (DEL), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} ${styles.FrmWd12} d-md-flex`}
                    >
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}
                      >
                        <Form>
                          <Form.Group controlId="checkIn">
                            <Form.Label className={styles.SrchLabel}>
                              Check-In
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}
                      >
                        <Form>
                          <Form.Group controlId="checkOut">
                            <Form.Label className={styles.SrchLabel}>
                              Check-Out
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd5} ${styles.Bdr0} ${styles.FrmWd11}`}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          id="guests2"
                          className={styles.TrvlBtn}
                        >
                          Guests <span>2 Adults, 1 Room</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className={styles.SearchBtnBlock}>
                    <Button className={styles.SrchBtn}>
                      <Image src="/assets/search-icon.png" alt="" />
                      <span>Search</span>
                    </Button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Car">Car</Tab.Pane>
              <Tab.Pane eventKey="Cruises">Cruises</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

        <div className={styles.DiscoverList}>
          <Row>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
