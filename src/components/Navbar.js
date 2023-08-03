import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = () => {
      }

    document.addEventListener("mousedown", handler);
    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });


  return (
    <nav className="navbar">
      <Link to="/" className="quote-btn">
        <div className="logo">
          <img src={logo} alt="Tilesbypac logo" className="logo-img" />
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/" className="quote-btn nav-btn">
          HOME
        </Link>
        <CustomLink to="/about" className="quote-btn nav-btn">
          ABOUT US
        </CustomLink>
        <CustomLink to="/gallery" className="quote-btn nav-btn">
          GALLERY
        </CustomLink>
        <CustomLink to="/contact" className="quote-btn nav-btn">
          CONTACT
        </CustomLink>
      </div>
      <div className="quote">
        <a href="mailto:tilesbypac@abc.com" className="quote-btn">
          Get a Quote
        </a>
      </div>
      <div className="hamburger-nav" >
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="fa-solid fa-bars fa-xl dropdown"></i>
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem destination={"/"} text={"Home"} />
            <DropdownItem destination={"/about"} text={"About"} />
            <DropdownItem destination={"/gallery"} text={"Gallery"} />
            <DropdownItem destination={"/contact"} text={"Contact"} />
          </ul>
        </div>
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

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <a href={props.destination}>{props.text}</a>
    </li>
  );
}
export default Navbar;
