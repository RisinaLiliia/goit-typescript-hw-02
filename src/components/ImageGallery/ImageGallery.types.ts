import { UnsplashImage } from '../../types/unsplash';

export interface ImageGalleryProps {
  images: UnsplashImage[];
  loading: boolean;
  error: string | null;
  totalImages: number;
}