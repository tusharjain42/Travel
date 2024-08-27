import axios from 'axios';

interface ApiResponse {
  error: boolean;
  message?: string;
  code: number;
  status: boolean;
}

const NewsLetterSignup = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/newsletter-subscriptions`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error('Error:', err);
    
    return {
      error: true,
      message: 'Failed to subscribe. Please try again later.',
      code: 500,
      status: false,
    };
  }
};

export default NewsLetterSignup;
