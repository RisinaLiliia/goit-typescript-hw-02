import { UnsplashImage } from "../../api/fetchImages";

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null; 
}
