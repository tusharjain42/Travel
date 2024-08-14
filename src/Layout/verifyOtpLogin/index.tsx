"use client";
import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import styles from "../../styles/SignIn/SignIn.module.scss";

const VerifyOtp = () => {
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
            <Button className={`${styles.SigninBtn} globalBtn`}>Sign In</Button>
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
          <Form.Group className={`${styles.FormGroup} text-center`}>
            <a href="#" className={styles.Link_btn}>
              Enter password instead
            </a>
          </Form.Group>
        </div>
      </div>
    </div>
    </>
  );
};

export default VerifyOtp;
