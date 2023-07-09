import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Pitch from "./components/Pitch";
import Imageslider from "./components/Imageslider";
import Call from "./components/Call";
import Reviewslider from "./components/Reviewslider";
import "./styles/App.css";



function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
      <Call />
      <Imageslider />
      <Pitch />
      <Reviewslider />
      <Footer />
    </div>
  );
}

export default App;
