import { UnsplashImage } from '../../types/unsplash';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null; 
}
