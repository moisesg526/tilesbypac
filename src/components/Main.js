import Slider from "./Slider";
function Main() {
  return (
    <div className="main">
      <Slider />
      <div className="pic-pitch">
        <img
          src="./images/construction.jpg"
          alt="Construction at work"
          className="construction-img"
        />

        <img
          src="./images/finishedkitchen.jpg"
          alt="Kitchen"
          className="finishedkitchen-img"
        />
        <div className="pitch">
          <h2>Outstanding Residential & Commercial Services</h2>
          <p>
            Tiles By Pac has always operated under strong values aimed at
            exceeding client needs. Our communication channels are always
            open—our relationship with our clients begins on the first day of
            contact, and only ends once they’re fully satisfied with our work.​
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
