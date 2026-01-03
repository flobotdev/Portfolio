import "./VideoPlayer.css";

export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
}) {
  return (
    <div className={`video-player-container ${className}`}>
      <video
        className="video-player"
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      ></video>
    </div>
  );
}
