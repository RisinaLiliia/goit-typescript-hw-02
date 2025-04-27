
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
