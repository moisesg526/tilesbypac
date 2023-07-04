import "../styles/Pitch.css";
import finishedkitchen from "../images/finishedkitchen.jpg"
function Pitch() {
  return (
    <div className="pitch">
      <img
        src={finishedkitchen}
        alt="Kitchen"
        className="finishedkitchen-img"
      />
      <div className="pitch-text">
        <h2>Outstanding Residential & Commercial Services</h2>
        <p>
          Tiles By Pac has always operated under strong values aimed at
          exceeding client needs. Our communication channels are always open—our
          relationship with our clients begins on the first day of contact, and
          only ends once they’re fully satisfied with our work.​
        </p>
      </div>
    </div>
  );
}

export default Pitch;
