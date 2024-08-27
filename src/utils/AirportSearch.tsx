import axios from 'axios';

interface AirportPayload {
    term: string;  
    from?: string;
    to?: string;
    departureDate?: string;
    returnDate?: string;
  }

  interface ApiResponse {
    error: boolean;
    data: any[];
    message: string;
    code: number;
    status: boolean;
  }


const AirportSearch = async (payload: AirportPayload): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_Backend_URL}/api/airport-search`, payload);
    return response.data;
  } catch (error) {
    console.error("API request failed:", error);
    return {
      error: true,
      data: [],
      message: 'Request failed',
      code: 500,
      status: false
    };
  }
};

export default AirportSearch;
