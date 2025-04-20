import { UnsplashImage } from '../../api/fetchImages';

export interface ImageGalleryProps {
  images: UnsplashImage[];
  loading: boolean;
  error: string | null;
  totalImages: number;
}