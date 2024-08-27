import axios from "axios";

const FaqPageData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_Backend_URL}/api/faq-list`);
      console.log('Success:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error occurred:', error);
      throw error; 
    }
  }
  
  export default FaqPageData;