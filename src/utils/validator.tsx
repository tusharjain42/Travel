export type FormData = {
  email: string;
  password: string;
  otp: string;
  confirmPassword?: string;
  firstName: string;
  lastName: string;
  mobile: string;
  message: string;
};

type ValidationErrors = {
  [key: string]: string;
};

const fieldLabels: { [key in keyof FormData]: string } = {
  email: "Email",
  password: "Password",
  otp: "OTP",
  confirmPassword: "Confirm Password",
  firstName: "First name",
  lastName: "Last name",
  mobile: "Phone Number",
  message: "Message"
};

export const validateForm = (formData: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

 
  Object.entries(formData).forEach(([field, value]) => {
    if (!value) {
      errors[field] = `${fieldLabels[field as keyof FormData]} is required`;
    } else {
      switch (field) {
        case "email":
          const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(value)) {
            errors[field] = "Please enter a valid email address";
          }
          break;

        case "otp":
          const otpRegex = /^\d{6}$/;
          if (!otpRegex.test(value)) {
            errors[field] = "OTP must be a 6-digit number";
          }
          break;

        case "password":
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          if (!passwordRegex.test(value)) {
            errors[field] = "Password must be at least 6 characters long and include at least one letter, one digit, and one special character";
          }
          break;

        case "firstName":
        case "lastName":
          if (value.length > 30) {
            errors[field] = "Must be 30 characters or less";
          }
          break;

        case "mobile":
      const phoneRegex = /^\d{10}$/; 
      if (!value) return "Phone number is required";
      if (!phoneRegex.test(value)) return 'Please enter a valid phone number with 10 digits';
      break;

        default:
          break;
      }
    }
  });

  if (formData.confirmPassword !== undefined && formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
