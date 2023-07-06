import "../styles/Call.css";
import lemonkitchen from "../images/lemonkitchen.jpg"
function Call() {
  return (
    <div className="callus">
      <div className="callus-text">
        <h2>Do you Need your Kitchen or Bathroom remodeled?</h2>
        <div className="callus-p">
          <p>
            Our tile service and options are proudly offered to clients. Send us
            an Email or give us a call for a free service estimate!
          </p>
        </div>
      </div>
      <img src={lemonkitchen} alt="lemon-kitchen" className="lemon-kitchen"/>
    </div>
  );
}

export default Call;
