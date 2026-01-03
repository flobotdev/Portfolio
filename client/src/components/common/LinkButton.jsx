import "./LinkButton.css";

export default function LinkButton({
  href,
  children,
  className = "",
  openInNewTab = true,
}) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`link-button ${className}`}
    >
      {children}
    </a>
  );
}
