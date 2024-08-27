"use client";
import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/SignIn/SignIn.module.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
});

function SignInPage() {
  const handleSubmit = (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.SignBoxOuter}>
      <div className={"container"}>
        <div className={styles.SignBoxInr}>
          <div className={"mb-3 text-center"}>
            <h3>Enter Your Email</h3>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="text"
                    name="email"
                    as={Form.Control}
                    id="Email"
                    aria-describedby="EmailHelpBlock"
                    placeholder="Email"
                    className={"required"}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="password"
                    name="password"
                    as={Form.Control}
                    id="Password"
                    aria-describedby="PasswordHelpBlock"
                    placeholder="Password"
                    className={"required"}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <Button
                    type="submit"
                    className={`${styles.SigninBtn} globalBtn`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Continue"}
                  </Button>
                </Form.Group>

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <a href="signup" className={styles.Link_btn}>
                    If you don't have an account? Please Signup
                  </a>
                </Form.Group>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
