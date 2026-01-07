import { createPortal } from "react-dom";
import "./DescriptionModal.css";

export default function DescriptionModal({
  title,
  description,
  stats,
  onClose,
}) {
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
        {stats && (
          <div className="description-modal-stats">
            <div className="modal-stats-row">
              <div className="modal-stat-item">
                <span className="modal-stat-label">Subscribers:</span>
                <span className="modal-stat-value">
                  {stats.subscriptions?.toLocaleString()}
                </span>
              </div>
              {stats.favorited && (
                <div className="modal-stat-item">
                  <span className="modal-stat-label">Favorited:</span>
                  <span className="modal-stat-value">
                    {stats.favorited?.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
            {(stats.lifetime_subscriptions || stats.lifetime_favorited) && (
              <div className="modal-stats-row">
                {stats.lifetime_subscriptions && (
                  <div className="modal-stat-item">
                    <span className="modal-stat-label">Lifetime Subs:</span>
                    <span className="modal-stat-value">
                      {stats.lifetime_subscriptions?.toLocaleString()}
                    </span>
                  </div>
                )}
                {stats.lifetime_favorited && (
                  <div className="modal-stat-item">
                    <span className="modal-stat-label">
                      Lifetime Favorited:
                    </span>
                    <span className="modal-stat-value">
                      {stats.lifetime_favorited?.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div className="description-modal-text">{description}</div>
      </div>
    </div>,
    document.body
  );
}
