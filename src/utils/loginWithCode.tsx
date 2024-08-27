import axios from 'axios';

interface ApiResponse {
  error: boolean;
  message: string;
  code: number;
  status: boolean;
}

const LoginWithOtp = async (
  email: string,
  otp: string
): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/login-with-verification-code`,
      { email, otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
    
      throw new Error(error.response.data.message || "An error occurred. Please try again.");
    }
 
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};

export default LoginWithOtp;
