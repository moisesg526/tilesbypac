import BackToTopBtn from "../components/BackToTopBtn";
import { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-selection">
        <ul>
          <li
            className={toggleState === 1 ? "tabs active-tab" : "tab"}
            onClick={() => toggleTab(1)}
          >
            All Projects
          </li>
          <li
            className={toggleState === 2 ? "tabs active-tab" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Kitchens
          </li>
          <li
            className={toggleState === 3 ? "tabs active-tab" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Bathrooms
          </li>
        </ul>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroomdark.jpg")}
              alt="dark bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroommodern.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>{" "}
          <div className="gallery-img-container">
            <img
              src={require("../images/glass-bathroom.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/darkglass-bathroom.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroomsink.jpg")}
              alt="bathroom sink"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/whitekitchen.jpg")}
              alt="white kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/clean-brick-kitchen.jpg")}
              alt="white kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/kitchentiles.jpg")}
              alt="kitchen tiles"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/kitchensink.jpg")}
              alt="kitchen sink"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/lemonkitchen.jpg")}
              alt="lemon kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/finishedkitchen.jpg")}
              alt="finished kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div className="gallery-img-container">
            <img
              src={require("../images/whitekitchen.jpg")}
              alt="white kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/clean-brick-kitchen.jpg")}
              alt="white kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/kitchentiles.jpg")}
              alt="kitchen tiles"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/kitchensink.jpg")}
              alt="kitchen sink"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/lemonkitchen.jpg")}
              alt="lemon kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/finishedkitchen.jpg")}
              alt="finished kitchen"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroomdark.jpg")}
              alt="dark bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroommodern.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>{" "}
          <div className="gallery-img-container">
            <img
              src={require("../images/glass-bathroom.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/darkglass-bathroom.jpg")}
              alt="modern bathroom"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("../images/bathroomsink.jpg")}
              alt="bathroom sink"
              className="gallery-img"
            />
            <div className="middle-container">
              <i className="fa-solid fa-magnifying-glass fa-xl glass"></i>
            </div>
          </div>
        </div>
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default Gallery;
