import "../styles/Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./images/logo.png" alt="Tilesbypac logo" className="logo-img"/>
            </div>
            <div className="nav-links">
                <a href="#">HOME</a>
                <a href="#">ABOUT US</a>
                <a href="#">GALLERY</a>
                <a href="#">CONTACT</a>
            </div>
            <div className="quote">
                <button className="quote-btn">Get a Qoute</button>
            </div>
        </nav>
    )
}

export default Navbar;