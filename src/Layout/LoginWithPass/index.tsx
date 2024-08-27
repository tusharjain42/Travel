"use client";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import styles from "../../styles/SignIn/SignIn.module.scss";
import ResendOtp from "@/utils/resendOtp";
import Loader from "@/Layout/loader";

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

const LoginWithPassword: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  const [initialEmail, setInitialEmail] = useState<string>("");

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setInitialEmail(emailFromQuery);
    }
  }, [searchParams]);

  const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        toast.error("Username and password are incorrect.");
      } else if (result?.ok) {
        toast.success("Login Successful!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Failed to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      const data = await ResendOtp(initialEmail);

      if (data.status) {
        toast.success("A new OTP has been sent to your email.");
      } else {
        toast.error(data.message || "Failed to resend OTP.");
      }
    } catch (err) {
      toast.error("An error occurred while requesting a new OTP.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className={styles.SignBoxOuter}>
      <div className={"container"}>
        <div className={styles.SignBoxInr}>
          <Formik
            initialValues={{ email: initialEmail, password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}  // Ensure Formik reinitializes with updated values
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    as={Form.Control}
                    disabled={isSubmitting}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    as={Form.Control}
                    disabled={isSubmitting}
                  />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <div>
                    <Form.Check
                      type="checkbox"
                      id="keepMeSignedIn"
                      className={styles.CustomCHK}
                    >
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label>Keep me signed in</Form.Check.Label>
                    </Form.Check>
                  </div>
                  <p>
                    <small>
                      This is for personal devices only. Don’t check this on shared
                      devices to keep your account secure.
                    </small>
                  </p>
                </Form.Group>

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <Button
                    type="submit"
                    className={`${styles.SigninBtn} globalBtn`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </Button>
                </Form.Group>

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <Link href="/forgot-password" className={styles.Link_btn}>
                    Forgot Password?
                  </Link>
                </Form.Group>

                <Form.Group
                  onClick={handleResendOtp}
                  className={`${styles.FormGroup} text-center`}
                >
                  <Link href="/login-otp" className={styles.Link_btn}>
                    Send a secure code via email
                  </Link>
                </Form.Group>

                {isSubmitting && (
                  <div style={{ marginTop: "40px" }}>
                    <Loader />
                  </div>
                )}
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPassword;
