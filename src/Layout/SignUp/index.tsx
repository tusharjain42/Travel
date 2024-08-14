"use client";
import React from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import CountryFlag from 'react-country-flag';
import styles from "@/styles/SignUp/SignUp.module.scss";

function SignUpPage() {
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
            <div className={"mb-3 text-center"}>
              <h3>Enter Your Email</h3>
            </div>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                id="Email"
                aria-describedby="EmailHelpBlock"
                placeholder="Email"
                className={"required"}
              />
              <div className={"required"}>Please type correct email id</div>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <Button className={`${styles.SigninBtn} globalBtn`} disabled>
                Continue
              </Button>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
