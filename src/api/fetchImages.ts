
import axios, { AxiosError } from 'axios';

const ACCESS_KEY = 'KAtpeeUxFJUDvLn_17eHahUdF33DUJo0V_POBIGTUrM';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export interface UnsplashUser {
  name: string;
  username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  alt_description: string | null;
  description: string | null;
  links: {
    html: string;
  };
}

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
    full: string;
  };
  alt_description: string | null;
  user: UnsplashUser;
  likes: number;
}

interface FetchImagesResponse {
  results: UnsplashImage[];
  total: number; 
}

interface AxiosErrorResponse {
  message: string;
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
  } catch (error) {
    const axiosError = error as AxiosError<AxiosErrorResponse>;
    const errorMessage = axiosError.response?.data.message || 'Error fetching images';
    console.error('Fetch error:', errorMessage);
    throw new Error(errorMessage);
  }
};




