"use client";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import styles from "../../styles/SignIn/SignIn.module.scss";
import resetPassword from "../../utils/resetPassword";
import ResendOtp from "@/utils/resendOtp";
import Loader from "@/Layout/loader";

const validationSchema = Yup.object({
  otp: Yup.string()
  .max(6, "Must be 6 Digits or less")
  .required("OTP is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(30);
  const [canRequestOtp, setCanRequestOtp] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setFormData({
        email: emailFromQuery,
        otp: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [searchParams]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!canRequestOtp && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            setCanRequestOtp(true);
            clearInterval(timer);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [canRequestOtp, countdown]);

  const handleSubmit = async (
    values: {
      email: string;
      otp: string;
      password: string;
      confirmPassword: string;
    },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setLoading(true);
    try {
      const result = await resetPassword(values);

      if (result?.error) {
        toast.error(result.message);
      } else if (result?.status) {
        toast.success(result.message);
        router.push("/login-password");
      }
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Failed to reset password. Please try again."
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      const data = await ResendOtp(formData.email);

      if (data.status) {
        toast.success("A new OTP has been sent to your email.");
        setCanRequestOtp(false);
        setCountdown(30);
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
            initialValues={{
              email: "",
              otp: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
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
                    disabled
                  />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="otp">OTP</Form.Label>
                  <Field
                    type="text"
                    name="otp"
                    id="otp"
                    placeholder="OTP"
                    as={Form.Control}
                  />
                  <ErrorMessage
                    name="otp"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    as={Form.Control}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="confirmPassword">
                    Confirm Password
                  </Form.Label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    as={Form.Control}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <Button
                      type="submit"
                      className={`${styles.SigninBtn} globalBtn`}
                      disabled={isSubmitting || loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </Form.Group>

                {!canRequestOtp && (
                  <Form.Group className={`${styles.FormGroup} text-center`}>
                    <p>
                      Didn’t receive an email? <br />
                      You can request another code in {countdown}s
                    </p>
                  </Form.Group>
                )}

                {canRequestOtp && (
                  <Form.Group className={`${styles.FormGroup} text-center`}>
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      type="button"
                      className={styles.Link_btn}
                      onClick={handleResendOtp}
                      disabled={resendLoading}
                    >
                      {resendLoading
                        ? "Requesting..."
                        : "Request another secure code"}
                    </Button>
                  </Form.Group>
                )}

                {loading && (
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

export default ResetPassword;
