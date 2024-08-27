import axios from 'axios';

const countryCode = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_Backend_URL}/api/country-code`);
    console.log('Success console:', response.data);
    return response.data;
  } catch (error: any) {

  }
};

export default countryCode;