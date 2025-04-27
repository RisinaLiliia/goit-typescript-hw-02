import { UnsplashImage } from '../../types/unsplash';  

export interface State {
  images: UnsplashImage[];
  isLoading: boolean;
  error: string | null;
  selectedImage: UnsplashImage | null;
  page: number;
  query: string;
  hasShownToast: boolean;
}

export type Action =
  | { type: "SET_IMAGES"; images: UnsplashImage[] }
  | { type: "SET_LOADING"; isLoading: boolean }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "SET_SELECTED_IMAGE"; image: UnsplashImage | null }
  | { type: "SET_QUERY"; query: string }
  | { type: "INCREMENT_PAGE" }
  | { type: "SET_HAS_SHOWN_TOAST"; value: boolean };

export type HandleSearch = (newQuery: string, resetForm: () => void) => void;
export type HandleLoadMore = () => void;
export type HandleImageClick = (image: UnsplashImage) => void;
export type CloseModal = () => void;



