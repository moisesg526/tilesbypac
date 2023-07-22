import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="bathroom-gallery">
        <h2>Bathroom</h2>
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
      <div className="kitchen-gallery">
        <h2>Kitchen</h2>
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
    </div>
  );
}

export default Gallery;
