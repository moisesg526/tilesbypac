import { useState } from "react";
import BackToTopBtn from "../components/BackToTopBtn";
import "../styles/Gallery.css";

function Gallery() {
  const [displayBathroom, setDisplayBathroom] = useState(false);
  const [displayKitchen, setDisplayKitchen] = useState(false);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-selection">
        <ul>
          <li>All Projects</li>
          <li onClick={() => setDisplayKitchen(true)}>Kitchens</li>
          <li onClick={() => setDisplayBathroom(true)}>Bathrooms</li>
        </ul>
      </div>
      <div
        className={`bathroom-gallery ${
          displayKitchen ? "hide-bathroom-gallery" : ""
        }`}
      >
        <div className="gallery-img-container">
          <img
            src={require("../images/bathroomdark.jpg")}
            alt="dark bathroom"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/bathroommodern.jpg")}
            alt="modern bathroom"
            className="gallery-img"
          />
        </div>{" "}
        <div className="gallery-img-container">
          <img
            src={require("../images/glass-bathroom.jpg")}
            alt="modern bathroom"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/darkglass-bathroom.jpg")}
            alt="modern bathroom"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/bathroomsink.jpg")}
            alt="bathroom sink"
            className="gallery-img"
          />
        </div>
      </div>
      <div
        className={`kitchen-gallery ${
          displayBathroom ? "hide-kitchen-gallery" : ""
        }`}
      >
        <div className="gallery-img-container">
          <img
            src={require("../images/whitekitchen.jpg")}
            alt="white kitchen"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/clean-brick-kitchen.jpg")}
            alt="white kitchen"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/kitchentiles.jpg")}
            alt="kitchen tiles"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/kitchensink.jpg")}
            alt="kitchen sink"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/lemonkitchen.jpg")}
            alt="lemon kitchen"
            className="gallery-img"
          />
        </div>
        <div className="gallery-img-container">
          <img
            src={require("../images/finishedkitchen.jpg")}
            alt="finished kitchen"
            className="gallery-img"
          />
        </div>
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default Gallery;
