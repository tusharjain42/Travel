import axios from 'axios';

interface Payload {
  mobile_country_id: string; 
}

const countryCode = async (payload: Payload) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_Backend_URL}/api/country-code`, payload);
    console.log('Success:', response.data);
    return response.data;
  } catch (error: any) {

  }
};

export default countryCode;