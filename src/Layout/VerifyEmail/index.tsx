"use client";
import React from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import CountryFlag from 'react-country-flag';
import styles from "@/styles/SignUp/SignUp.module.scss";

function Verifyemail() {
  const countries = [
    { code: 'US', name: 'United States', phone: '+1' },
    { code: 'IN', name: 'India', phone: '+91' },
    { code: 'GB', name: 'United Kingdom', phone: '+44' },   
  ];

  return (
    <>
      <div className={styles.SignBoxOuter}>
        <div className={"container"}>
          <div className={styles.SignBoxInr}>
            <div className={"mb-3"}>
              <h3>Let’s confirm your email</h3>
              <p>
                To continue, enter the secure code we sent to
                <br />
                deepak.jangid@dotsquares.com. <br />
                Check junk mail if it’s not in your inbox.
              </p>
            </div>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                id="code"
                aria-describedby="6DigitCode"
                placeholder="Enter 6 Digit Code"
              />
            </Form.Group>

            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                id="firstname"
                aria-describedby="firstname"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                id="lastname"
                aria-describedby="lastname"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <InputGroup>
                <DropdownButton
                  className={styles.CountryCodeBtn}
                  variant="outline-secondary"
                  id="input-group-dropdown-1"
                  title={
                    <>
                      <CountryFlag
                        countryCode="IN"
                        svg
                        style={{ marginRight: "10px" }}
                      />
                      +91
                    </>
                  }
                >
                  {countries.map((country, index) => (
                    <Dropdown.Item key={index} href="#">
                      <CountryFlag
                        countryCode={country.code}
                        svg
                        style={{ marginRight: "10px" }}
                      />
                      {country.name} ({country.phone})
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <Form.Control
                  type="phone"
                  id="phone"
                  aria-describedby="phone"
                  placeholder="Enter Phone No."
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="password"
                id="password"
                aria-describedby="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="password"
                id="confirmpassword"
                aria-describedby="confirmpassword"
                placeholder="Enter Confirm Password"
              />
            </Form.Group>

            <Form.Group className={styles.FormGroup}>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`}>
                  <Form.Check
                    type={type}
                    id={`inline-${type}-13`}
                    className={styles.CustomCHK}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>{`Keep me signed in`}</Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
              <p>
                <small>
                  This is for personal devices only. Don’t check this on shared
                  devices to keep your account secure.
                </small>
              </p>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <Button className={`${styles.SigninBtn} globalBtn`}>
                Sign Up
              </Button>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <a href="#" className={styles.Link_btn}>
                Request another secure code
              </a>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <p>
                Didn’t receive an email? <br />
                You can request another code in 18s
              </p>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verifyemail;
