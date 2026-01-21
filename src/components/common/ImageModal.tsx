import { memo, useEffect } from "react";
import type { ImageModalProps } from "@/types";

const ImageModal = ({ isOpen, imageUrl, alt, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="image-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada del proyecto"
    >
      <img
        src={imageUrl}
        alt={`${alt} - Vista ampliada`}
        className="modal-img"
        loading="eager"
        decoding="async"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default memo(ImageModal);
