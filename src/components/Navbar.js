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
        <a href="#" className="quote-btn">HOME</a>
        <a href="#" className="quote-btn">ABOUT US</a>
        <a href="#" className="quote-btn">GALLERY</a>
        <a href="#" className="quote-btn">CONTACT</a>
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
