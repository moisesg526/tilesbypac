import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Main from "./components/Main";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
      <Main />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
