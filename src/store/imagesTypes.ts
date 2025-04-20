import { UnsplashImage } from '../api/fetchImages';

export interface ImagesState {
  images: UnsplashImage[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  page: number;
  totalImages: number; 
}
