import axios from 'axios';

interface Payload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  mobile: string;
  mobile_country_id: string; 
  otp: string;
}

const RegisteredData = async (payload: Payload) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/registration`, payload);
    console.log('register data:', response.data);
    return response.data;
  } catch (error: any) {

    if (error.response && error.response.data) {
      if (error.response.data.code === 404 && error.response.data.message === 'Invalid OTP') {
        throw {
          message: 'Invalid OTP. Please check the code and try again.',
          code: 404
        };
      } else if (error.response.data.code === 500) {
        throw {
          message: 'The OTP has expired. Please request a new one.',
          code: 500
        };
      }
      throw {
        message: error.response.data.message || 'An unexpected error occurred.',
        code: error.response.data.code || 500,
        data: error.response.data
      };
    } else {
      throw {
        message: 'An unexpected error occurred.',
        code: 500
      };
    }
  }
};

export default RegisteredData;