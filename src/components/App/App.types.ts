import { MouseEventHandler } from "react";

export interface Images {
  url: string;
  description: string | undefined
  author: string;
  likes: number;
}

export interface ErrorMessageProps {
  message: string | boolean;
}

export interface ImageCardProps {
  url: string;
  onImageClick: MouseEventHandler<HTMLDivElement>;
}

export interface ImageCardItem {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string | undefined;
  user: { name: string };
  likes: number;

};


export interface ImageGalleryProps {
  photos: ImageCardItem[];
  onPhotosClick: (image: Images) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Images;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSubmit: (searchQuery: string) => void;
}

export interface UnsplashResponse {
  results: ImageCardItem[];
  total_pages: number;
}