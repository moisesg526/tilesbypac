import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Tilesbypac logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/" className="quote-btn">
          HOME
        </Link>
        <CustomLink to="/about" className="quote-btn">
          ABOUT US
        </CustomLink>
        <CustomLink to="/gallery" className="quote-btn">
          GALLERY
        </CustomLink>
        <CustomLink to="/contact" className="quote-btn">
          CONTACT
        </CustomLink>
      </div>
      <div className="quote">
        <a href="mailto:tilesbypac@abc.com" className="quote-btn">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
