import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="bathroom-gallery"></div>
      <div className="kitchen-gallery">
        <div className="gallery-img-container">
          <img
            src={require("../images/whitekitchen.jpg")}
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
