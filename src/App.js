import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Pitch from "./components/Pitch";
import Slider from "./components/Slider";
import Call from "./components/Call";
import Reviewslider from "./components/Reviewslider";
// import Main from "./components/Main";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
      <Call />
      <Pitch />
      <Slider />
      <Reviewslider />
      <Footer />
    </div>
  );
}

export default App;
