import Pitch from "./Pitch";
import Slider from "./Slider";
import Call from "./Call";
import "../styles/Main.css";
function Main() {
  return (
    <div className="main">
      <Slider />
      <Pitch />
      <Call />
    </div>
  );
}

export default Main;
