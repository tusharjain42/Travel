"use client";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import styles from "@/styles/SignUp/SignUp.module.scss";
import RegisteredData from "../../utils/registerd";
import ResendOtp from "@/utils/resendOtp";
import countryCode from "@/utils/countryId";
import Loader from "@/Layout/loader";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Country {
  phone_code: number;
  icon: string;
  name: string;
  id: string;
}

const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  const [canRequestOtp, setCanRequestOtp] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(30);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      formik.setFieldValue("email", emailFromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await countryCode();
        if (response && response.data && Array.isArray(response.data)) {
          setCountries(response.data);
          const defaultCountry = response.data.find(
            (country) =>
              country.name === "UNITED KINGDOM" || country.name === "UK"
          );
          if (defaultCountry) {
            setSelectedCountry(defaultCountry);
          } else if (response.data.length > 0) {
            setSelectedCountry(response.data[0]);
          }
        } else {
          setCountries([]);
        }
      } catch (error) {
        setCountries([]);
      }
    };

    fetchCountryCodes();
  }, []);

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


  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 digits") 
      .required("OTP is required"),
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .max(30, "First name must be 30 characters or less")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .max(30, "Last name must be 30 characters or less")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
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
  const formik = useFormik({
    initialValues: {
      otp: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        mobile: selectedCountry
          ? `${selectedCountry.phone_code}${values.mobile}`
          : values.mobile,
        mobile_country_id: selectedCountry ? selectedCountry.id : "",
        otp: values.otp,
      };

      try {
        const response = await RegisteredData(payload);
        if (response && response.status === true) {
          toast.success(response.message);
          sessionStorage.setItem('userDetails', JSON.stringify({
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            mobile: values.mobile,
            country: selectedCountry ? selectedCountry.name : "",
          }));

          router.push("/");
        } else {
          toast.error(response.message || "An unexpected error occurred.");
        }
      } catch (error: any) {
        toast.error(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      const data = await ResendOtp(formik.values.email);
      if (data.status) {
        toast.success("A new OTP has been sent to your email.");
        setCanRequestOtp(false);
        setCountdown(60);
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
      <div className="container">
        <div className={styles.SignBoxInr}>
          <div className="mb-3">
            <h3>Let’s confirm your email</h3>
          </div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="email"
                name="email"
                id="email"
                aria-describedby="email"
                placeholder="Enter Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && !!formik.errors.email}
                disabled
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                name="otp"
                id="otp"
                aria-describedby="otp"
                placeholder="Enter OTP"
                value={formik.values.otp}
                maxLength={6}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.otp && !!formik.errors.otp}
              />
              {formik.touched.otp && formik.errors.otp && (
                <div className="text-danger">{formik.errors.otp}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                name="firstName"
                id="firstname"
                aria-describedby="firstname"
                placeholder="Enter First Name"
                value={formik.values.firstName}
                maxLength={30}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-danger">{formik.errors.firstName}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="text"
                name="lastName"
                id="lastname"
                aria-describedby="lastname"
                placeholder="Enter Last Name"
                value={formik.values.lastName}
                maxLength={30}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.lastName && !!formik.errors.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-danger">{formik.errors.lastName}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <InputGroup>
                <DropdownButton
                  className={styles.CountryCodeBtn}
                  variant="outline-secondary"
                  id="input-group-dropdown-1"
                  title={
                    <>
                      {selectedCountry && (
                        <>
                          <Image
                            src={selectedCountry.icon}
                            height={20}
                            width={20}
                            alt={`Flag of ${selectedCountry.name}`}
                            style={{
                              marginRight: "10px",
                              filter: "brightness(1.2)",
                            }}
                          />
                          {selectedCountry.phone_code}
                        </>
                      )}
                    </>
                  }
                >
                  <div
                    style={{
                      maxHeight: "300px",
                      overflowY: "auto",
                    }}
                  >
                    {countries.length > 0 ? (
                      countries.map((country) => (
                        <Dropdown.Item
                          key={country.phone_code}
                          onClick={() => setSelectedCountry(country)}
                        >
                          <img
                            src={country.icon}
                            alt={`Flag of ${country.name}`}
                            style={{
                              marginRight: "10px",
                              width: "24px",
                              height: "16px",
                            }}
                          />
                          {country.phone_code} {country.name}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item disabled>
                        No countries available
                      </Dropdown.Item>
                    )}
                  </div>
                </DropdownButton>

                <Form.Control
                  type="text"
                  name="mobile"
                  id="mobile"
                  aria-describedby="mobile"
                  placeholder="Enter Mobile Number"
                  value={formik.values.mobile}
                  maxLength={10}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.mobile && !!formik.errors.mobile}
                />
              </InputGroup>
              {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-danger">{formik.errors.mobile}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="password"
                name="password"
                id="password"
                aria-describedby="password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Control
                type="password"
                name="confirmPassword"
                id="confirmpassword"
                aria-describedby="confirmpassword"
                placeholder="Enter Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </Form.Group>
            <Form.Group className={styles.FormGroup}>
              <Form.Check
                type="checkbox"
                id="keepSignedIn"
                className={styles.CustomCHK}
              >
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label>Keep me signed in</Form.Check.Label>
              </Form.Check>
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
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Sign Up"}
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
                  className={`${styles.Link_btn} ${styles.ResendBtn}`}
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
              <div style={{ marginTop: "80px" }}>
                <Loader />
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
