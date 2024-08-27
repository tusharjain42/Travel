import axios from 'axios';

interface ResendOtpResponse {
  error: boolean;
  message: string;
  status: boolean;
}

const ResendOtp = async (email: string): Promise<ResendOtpResponse> => {
  try {
    const response = await axios.post<ResendOtpResponse>(
      'https://travelportalphpadmin.24livehost.com/api/auth/resend-otp',
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
   
    if (axios.isAxiosError(error) && error.response) {
   
      return error.response.data as ResendOtpResponse;
    }
   
    return {
      error: true,
      message: 'An unexpected error occurred. Please try again later.',
      status: false,
    };
  }
};

export default ResendOtp;
