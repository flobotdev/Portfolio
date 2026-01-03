import { useState } from "react";
import "./Card.css";
import ImageModal from "./ImageModal";

function Card({ title, image, video, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mediaSrc = video || image;
  const isVideo = !!video;

  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      {mediaSrc && (
        <div className="card-image-container">
          {isVideo ? (
            <>
              <video
                src={video}
                className="card-image"
                controls
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
              />
              <button
                className="card-image-maximize"
                onClick={() => setIsModalOpen(true)}
                aria-label="Maximize video"
              >
                ⛶
              </button>
            </>
          ) : (
            <>
              <img
                src={image}
                alt={title || "Card image"}
                className="card-image"
              />
              <button
                className="card-image-maximize"
                onClick={() => setIsModalOpen(true)}
                aria-label="Maximize image"
              >
                ⛶
              </button>
            </>
          )}
        </div>
      )}
      <div className="card-content">{children}</div>
      {isModalOpen && (
        <ImageModal
          src={mediaSrc}
          alt={title || "Card media"}
          isVideo={isVideo}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Card;
