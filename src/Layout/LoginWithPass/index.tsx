"use client";
import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import styles from "../../styles/SignIn/SignIn.module.scss";

const LoginWithPassword = () => {
  return (
    <>
      <div className={styles.SignBoxOuter}>
        <div className={"container"}>
          <div className={styles.SignBoxInr}>
            <div className={"mb-3"}>
              <h3>Enter your password</h3>
            </div>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="eml">Email</Form.Label>
              <Form.Control
                type="text"
                id="eml"
                aria-describedby="Email"
                value="deepak.jangid@dotsquares.com"
                readOnly
              />
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="password"
                id="password2"
                aria-describedby="password2"
                placeholder="Password"
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
                Sign In
              </Button>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <a href="#" className={styles.Link_btn}>
                Forgot Password?
              </a>
            </Form.Group>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <a href="#" className={styles.Link_btn}>
                Send a secure code via email
              </a>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginWithPassword;
