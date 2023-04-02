import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="./images/logo.png"
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
        {/* <button className="quote-btn">Get a Qoute</button> */}
        <a href="mailto:tilesbypac@abc.com" className="quote-btn">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
