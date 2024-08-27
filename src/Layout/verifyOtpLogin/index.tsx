"use client";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import styles from "../../styles/SignIn/SignIn.module.scss";
import LoginWithOtp from "@/utils/loginWithCode";
import ResendOtp from "@/utils/resendOtp";
import Loader from "@/Layout/loader";
import Link from "next/link";

// Yup validation schema
const validationSchema = Yup.object({
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

const VerifyOtp: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(30);
  const [canRequestOtp, setCanRequestOtp] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ email: string; otp: string }>({ email: "", otp: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setFormData({ email: emailFromQuery, otp: "" });
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

  const handleSubmit = async (values: { email: string; otp: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setLoading(true);
    try {
      const data = await LoginWithOtp(values.email, values.otp);

      if (data.status) {
        toast.success(data.message);
        router.push("/");
      } else {
        toast.error(data.message || "Failed to verify OTP");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
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
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred while requesting a new OTP.");
      }
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className={styles.SignBoxOuter}>
      <div className="container">
        <div className={styles.SignBoxInr}>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true} // Ensure Formik reinitializes when formData changes
          >
            {({ isSubmitting, values }) => (
              <FormikForm>
                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="email"
                    name="email"
                    id="Email"
                    aria-describedby="EmailHelpBlock"
                    placeholder="Email"
                    as={Form.Control}
                    value={values.email} // Ensure the email field reflects the formData
                    disabled
                  />
                </Form.Group>

                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="text"
                    name="otp"
                    id="code"
                    aria-describedby="6DigitCode"
                    placeholder="Enter 6 Digit Code"
                    as={Form.Control}
                  />
                  <ErrorMessage name="otp" component="div" className="text-danger" />
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
                      {loading ? "Submitting..." : "Sign In"}
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

                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <Link
                    href={`/login-password?email=${encodeURIComponent(formData.email)}`}
                    className={styles.Link_btn}
                  >
                    Enter password instead
                  </Link>
                </Form.Group>

                {loading && (
                  <div style={{ marginTop: "20px" }}>
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

export default VerifyOtp;
