import { MouseEventHandler } from "react";

export interface Images {
  url: string;
  description: null | string
  author: string;
  likes: number
}

export interface ErrorMessageProps {
  message: string | boolean;
}

export interface ImageCardProps {
  url: string;
  onImageClick: MouseEventHandler<HTMLDivElement>;
}

export interface ImageCardProp {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  user: { name: string };
  likes: number;
};



export interface ImageGalleryProps {
  photos: ImageCardProp[];
  onPhotosClick: (image: Images) => void;
}
