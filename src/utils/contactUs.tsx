import axios from "axios";

interface Payload {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  mobile: string;
}

const Contactus = async (payload: Payload) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_Backend_URL}/api/contact-us`,
      payload
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
    
      throw new Error(
        error.response.data.message ||
          "An error occurred. Please try again later."
      );
    }
    
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};

export default Contactus;
