import { UnsplashImage } from '../types/unsplash';

export interface ImagesState {
  images: UnsplashImage[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  page: number;
  totalImages: number; 
}
