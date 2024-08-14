"use client";
import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import styles from "@/styles/SignIn/SignIn.module.scss";
import Preloader from "../Preloader";

function SignInPage() {

  return (
    <>
      <div className={styles.SignBoxOuter}>
        {/* <Preloader/> */}
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
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <a href="signup" className={styles.Link_btn}>
               If you Don't have account? Please Signup
              </a>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
