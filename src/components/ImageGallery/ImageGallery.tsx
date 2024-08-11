import { ImageGalleryProps, ImageCardProp } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({ photos, onPhotosClick }: ImageGalleryProps) {
  return (
    <ul className={css.container}>
      {photos.map(
        ({
          id,
          urls: { small, regular },
          description,
          user: { name },
          likes,
        }: ImageCardProp) => (
          <li className={css.photoContainer} key={id}>
            <ImageCard
              url={small}
              onImageClick={() =>
                onPhotosClick({
                  url: regular,
                  description,
                  author: name,
                  likes,
                })
              }
            />
          </li>
        )
      )}
    </ul>
  );
}

