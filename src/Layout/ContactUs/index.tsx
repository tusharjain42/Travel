"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import styles from "@/styles/ContactUs/ContactUs.module.scss";
import Contactus from "@/utils/contactUs";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const namePattern = /^[A-Za-z]{3,}$/;
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .matches(namePattern, "First name must be at least 3 letters and contain only alphabetic characters")
    .min(3, "First name must be at least 3 characters")
    .max(30, "Max 30 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(namePattern, "First name must be at least 3 letters and contain only alphabetic characters")
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Max 30 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .test('is-numeric', 'Mobile number must be numeric', value => !isNaN(Number(value))),
  message: Yup.string().required("Message is required"),
});

function ContactUsPage() {
  const router = useRouter();

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm, setErrors }: any
  ) => {
    try {
      const response = await Contactus({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        mobile: values.mobile,
        message: values.message,
      });

      toast.success(`${response.message}`,{
        position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: 1,
          theme: "colored"
      });
      resetForm();
      setSubmitting(false);
    } catch (error: any) {
      toast.error("Something went wrong. Please try again later.");
      setSubmitting(false);
      setErrors({ api: error.message || "An unexpected error occurred." });
    }
  };

  return (
    <div className={styles.ContactUsOuter}>
      <div className={styles.CtInfo}>
        <div className={"container"}>
          <Row>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/map-blue.png" alt="" />
                </div>
                <h5>Address</h5>
                <p>
                  CP4-228, 229, Apparel Park, Mahal Road (Hare Krishna Marg)
                  Jagatpura, Jaipur, Rajasthan, India 302017
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/phone-blue.png" alt="" />
                </div>
                <h5>Phone</h5>
                <p>
                  Company registration number
                  <br />
                  +91 98290 29555
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/envelop-blue.png" alt="" />
                </div>
                <h5>Email</h5>
                <p>
                  support@dotsquares.com
                  <br />
                  info@dotsquares.com
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.CtMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0055995731173!2d75.8154668155572!3d26.871563183145515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67cda4edb8f%3A0x44a26758d0377e21!2sDotsquares%20Jhalana%20Office!5e0!3m2!1sen!2sin!4v1599739574698!5m2!1sen!2sin"></iframe>
      </div>
      <div className={styles.CtForm}>
        <div className={"text-center mb-4"}>
          <h2>Get In Touch</h2>
          <p>
            We understand exactly the factors that make a good holiday and we’re
            here to give you the kind of travel experience you’ll remember for
            the longest time.
          </p>
          <p>Help us serve you better by filling in this below form.</p>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.FormGroup}>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.FormGroup}>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.FormGroup}>
                    <Form.Label htmlFor="mobile">Phone</Form.Label>
                    <Field
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Mobile No."
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.FormGroup}>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className={styles.FormGroup}>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      className={`form-control ${styles.FormTextarea}`}
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className={`${styles.FormGroup} text-center`}>
                    <Button
                      type="submit"
                      className={`${styles.SigninBtn} globalBtn`}
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUsPage;
