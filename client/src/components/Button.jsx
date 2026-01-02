import { Mail } from "lucide-react"; // lightweight SVG icon library
import "./Button.css";


function Button({ children, href, onClick, type = "button", showIcon = false }) {
  if (href) {
    return (
      <a
        href={href}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {showIcon && <Mail className="btn-icon" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className="btn" onClick={onClick}>
      {showIcon && <Mail className="btn-icon" />}
      {children}
    </button>
  );
}

export default Button;