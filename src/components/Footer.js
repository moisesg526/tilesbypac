import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="left-footer">
        <h3>Copyright 2023 TilesbyPac</h3>
        <h3>All Rights Reserved</h3>
      </div>
      <div className="right-footer">
        <h3>Follow Us</h3> <i className="fa-brands fa-facebook fa-xl social-media"></i>{" "}
        <i className="fa-brands fa-instagram fa-xl social-media"></i>
      </div>
    </footer>
  );
}

export default Footer;
