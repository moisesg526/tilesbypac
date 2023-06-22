import SimpleImageSlider from "react-simple-image-slider";
import "../styles/Main.css";

function Main() {
  let images = [
    { url: "./images/bathroomdark.jpg" },
    { url: "./images/whitekitchen.jpg" },
    { url: "./images/bathroommodern.jpg" },
    { url: "./images/kitchentiles.jpg" },
    { url: "./images/bathroomsink.jpg" },
    { url: "./images/kitchensink.jpg" },
  ];

  return (
    <div >
      <div className="slider">
        <SimpleImageSlider
          width={600}
          height={800}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={4}
          style={{ margin: "0 auto"}}
        />
      </div>
    </div>
  );
}

export default Main;
