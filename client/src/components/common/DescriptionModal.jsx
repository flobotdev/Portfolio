import { createPortal } from "react-dom";
import "./DescriptionModal.css";

export default function DescriptionModal({ title, description, onClose }) {
  return createPortal(
    <div className="description-modal-overlay" onClick={onClose}>
      <div
        className="description-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="description-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="description-modal-title">{title}</h2>
        <div className="description-modal-text">{description}</div>
      </div>
    </div>,
    document.body
  );
}
