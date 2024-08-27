"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import styles from "@/styles/SignUp/SignUp.module.scss";
import verifyEmailData from "../../utils/verifyEmail";
import Loader from "@/Layout/loader";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const VerifyEmail: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: { email: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setSubmitting(true);

    try {
      const response = await verifyEmailData(values.email);

      console.log(response, "response frontend");

      if (response.error) {
        toast.error(response.message || "An error occurred.");
      } else if (response.data.is_register) {
        toast.success(response.message);
        router.push(`/login-otp?email=${encodeURIComponent(values.email)}`);
      } else {
        toast.success(response.message);
        router.push(`/signup?email=${encodeURIComponent(values.email)}`);
      }
    } catch (err) {
      console.error("Error occurred:", err);
      toast.error(err instanceof Error ? err.message : "Failed to request OTP. Please try again.");
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
            {({ isSubmitting, errors, touched }) => (
              <FormikForm>
                <Form.Group className={styles.FormGroup}>
                  <Field
                    type="email"
                    name="email"
                    id="Email"
                    aria-describedby="EmailHelpBlock"
                    placeholder="Email"
                    as={Form.Control}
                    isInvalid={!!(errors.email && touched.email)} 
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
                      {isSubmitting ? "Submitting..." : "Continue"}
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

export default VerifyEmail;
