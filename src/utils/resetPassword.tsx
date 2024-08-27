import axios from 'axios';

interface ApiResponse {
  error: boolean;
  message: string;
  code: number;
  status: boolean;
}

const resetPassword = async (formData: { email: string; password: string; otp: string }) => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/reset-password`,
      formData, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  
    if (response.data.error) {
     
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (err) {
   
    if (axios.isAxiosError(err) && err.response) {
      const apiError = err.response.data as ApiResponse;
     
      throw new Error(apiError.message || 'An unexpected error occurred.');
    } else {
    
      throw new Error(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  }
};

export default resetPassword;
