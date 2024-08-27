"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/SignUp/SignUp.module.scss";
import ForgotPassword from "@/utils/forgotPassword";
import Loader from "@/Layout/loader";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
});

const ForgotPass: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: { email: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const res = await ForgotPassword(values.email);

      if (res.status) {
        toast.success("OTP has been sent to your registered email address.");
        router.push(`/reset-password?email=${encodeURIComponent(values.email)}`);
      } else {
        toast.error(res.message || "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.SignBoxOuter}>
      <div className={"container"}>
        <div className={styles.SignBoxInr}>
          <div className={"mb-3 text-center"}>
            <h3>Enter Your Email</h3>
          </div>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true} 
            validateOnBlur={true}  
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="email"
                    name="email"
                    as={Form.Control}
                    id="Email"
                    aria-describedby="EmailHelpBlock"
                    placeholder="Email"
                    className={"required"}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send reset OTP"}
                    </Button>
                    {isSubmitting && (
                      <div style={{ marginTop: "40px" }}>
                        <Loader />
                      </div>
                    )}
                  </div>
                </Form.Group>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
