import ReactModal from "react-modal";
import css from './ImageModal.module.css'
import { useEffect } from "react";
import { ImageModalProps } from "../App/App.types";

export default function ImageModal({ isOpen, onRequestClose, image }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onRequestClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.content} onClick={handleOverlayClick}>
        <img src={image.url} alt={image.description} className={css.image} />
        <div>
          <p>{image.description}</p>
          <p>{image.author}</p>
          <p>{image.likes} likes</p>
        </div>
      </div>
    </ReactModal>
  );
}
