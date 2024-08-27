import axios from 'axios';

interface ApiResponse {
  error: boolean;
  data: {
    is_register: boolean;
  };
  message: string;
  code: number;
  status: boolean;
}

const verifyEmailData = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/request-otp`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (err) {
 
    if (axios.isAxiosError(err)) {
      console.error('Axios Error:', err.response?.data || err.message);
      throw new Error(err.response?.data.message || 'An unexpected error occurred.');
    }
    console.error('Error:', err);
    throw new Error('An unexpected error occurred.');
  }
};

export default verifyEmailData;
