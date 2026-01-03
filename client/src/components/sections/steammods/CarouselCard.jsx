import "./CarouselCard.css";
import LinkButton from "../../common/LinkButton";

export default function CarouselCard({ mod, offset }) {
  // VARIABLES
  const scale = offset === 0 ? 1 : 0.8;
  const zIndex = offset === 0 ? 10 : 5;
  const opacity = offset === 0 ? 1 : 0.5;
  const rotateY = offset === 0 ? 0 : offset === -1 ? 15 : -15;
  const translateX = offset * 350;

  return (
    <div
      key={mod.id}
      className={
        offset === 1
          ? "carousel-card side-right"
          : offset === -1
          ? "carousel-card side-left"
          : "carousel-card"
      }
      style={{
        transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) rotateY(${rotateY}deg)`,
        zIndex,
        opacity,
      }}
    >
      <div className="carousel-card-image-container">
        <img
          src={mod.stats?.preview || mod.image}
          alt={mod.name}
          loading="lazy"
        />
        <LinkButton
          href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.id}`}
          className="mod-link-btn"
        >
          View on Steam
        </LinkButton>
      </div>
      <div className="carousel-card-stats">
        <h3>{mod.name}</h3>
        <p>{mod.description}</p>
        {mod.stats && (
          <div className="mod-stats">
            <div className="subscriber-badge">
              <span className="stat-label">Subscribers</span>
              <span className="stat-value">
                {mod.stats.subscriptions.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
