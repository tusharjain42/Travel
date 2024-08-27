"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/NewsLetter.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import NewsLetterSignup from "@/utils/newsLetter";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
});

const NewsLetter: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (values: { email: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const response = await NewsLetterSignup(values.email);

      if (response && response.status !== undefined) {
        if (response.status) {
          toast.success(response.message || "Signup successful!");
          setSubmitting(false);
        } else {
          toast.error(response.message || "An error occurred. Please try again.");
        }
      } else {
        throw new Error("Unexpected response format.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to request subscription. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.NewsLetterOuter}>
      <div className={"container"}>
        <Row className={"align-items-center"}>
          <Col md={6}>
            <div className={`${styles.NewsLetterLeft} d-flex align-items-center`}>
              <i>
                <Image src="/assets/icon7.png" alt="" />
              </i>
              <div className={styles.NewsLetterCard}>
                <p>Get the latest news and offers</p>
                <h4>Subscribe to our newsletter</h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.NewsLetterRight}>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={true} 
                validateOnBlur={true}  
              >
                {({ isSubmitting }) => (
                  <FormikForm>
                    <Field
                      type="email"
                      name="email"
                      as="input"
                      id="input5"
                      aria-describedby="input5"
                      placeholder="Enter your email address"
                      className={`${styles.NewsLetterInput} form-control`}
                    />
                    <ErrorMessage name="email" component="div" style={{ marginLeft: "25px" }}className="text-danger" />
                    <Button
                      type="submit"
                      className={styles.NewsLetterBtn}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </FormikForm>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewsLetter;
