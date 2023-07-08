import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Pitch from "./components/Pitch";
import Imageslider from "./components/Imageslider";
import Call from "./components/Call";
import Reviewslider from "./components/Reviewslider";
import classnames from 'classnames';
import "./styles/App.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
      <Call />
      <Imageslider className={classnames("hidden")}/>
      <Pitch className={classnames("hidden")}/>
      <Reviewslider className={classnames("hidden")}/>
      <Footer />
    </div>
  );
}

export default App;
