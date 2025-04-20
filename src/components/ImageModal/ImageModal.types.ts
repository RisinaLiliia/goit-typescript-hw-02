import { UnsplashImage } from "../../unsplashAPI";

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null; 
}
