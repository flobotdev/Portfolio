import { createPortal } from "react-dom";
import "./ImageModal.css";

export default function ImageModal({ src, alt, isVideo, onClose }) {
  return createPortal(
    <div className="image-modal-overlay" onClick={onClose}>
      <button
        className="image-modal-close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
      {isVideo ? (
        <video
          src={src}
          className="image-modal-content"
          controls
          autoPlay
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="image-modal-content"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>,
    document.body
  );
}
