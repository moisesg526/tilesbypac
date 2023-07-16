import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Tilesbypac logo"
          className="logo-img"
        />
      </div>
      <div className="nav-links">
        <Link to="#" className="quote-btn">HOME</Link>
        <Link to="#" className="quote-btn">ABOUT US</Link>
        <Link to="#" className="quote-btn">GALLERY</Link>
        <Link to="#" className="quote-btn">CONTACT</Link>
      </div>
      <div className="quote">
        <a href="mailto:tilesbypac@abc.com" className="quote-btn">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
