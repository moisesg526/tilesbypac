import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Main from "./components/Main";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
