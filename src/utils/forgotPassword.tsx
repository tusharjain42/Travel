import axios from "axios";

interface ApiResponse {
  error: boolean;
  message?: string;
  code: number;
  status: boolean;
}

const ForgotPassword = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/auth/forgot-password`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw new Error(
        err.response.data.message || "An error occurred. Please try again."
      );
    }

    throw new Error("An unexpected error occurred. Please try again later.");
  }
};

export default ForgotPassword;
