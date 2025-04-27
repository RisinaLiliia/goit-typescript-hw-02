import axios from 'axios';
import { UnsplashImage } from '../types/unsplash';

const ACCESS_KEY = 'KAtpeeUxFJUDvLn_17eHahUdF33DUJo0V_POBIGTUrM';
const BASE_URL = 'https://api.unsplash.com/search/photos';

interface FetchImagesResponse {
  results: UnsplashImage[];
  total: number;
}

export const fetchImages = async (query: string, page: number) => {
  try {
    const response = await axios.get<FetchImagesResponse>(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      },
    });

    return {
      images: response.data.results,
      totalImages: response.data.total,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || 'Error fetching images';
      console.error('Fetch error:', errorMessage);
      throw new Error(errorMessage);
    }
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error fetching images');
  }
};





