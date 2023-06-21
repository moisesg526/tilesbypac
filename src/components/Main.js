import Pitch from "./Pitch";
import Slider from "./Slider";
import Call from "./Call";
import Reviewslider from "./Reviewslider";
import "../styles/Main.css";
function Main() {
  return (
    <div className="main">
      <Call />
      <Slider />
      <Pitch />
      <Reviewslider />
    </div>
  );
}

export default Main;
