import React from "react";
import { motion } from "framer-motion";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhoneNum from "./components/PhoneNum";
import Pitch from "./components/Pitch";
import Imageslider from "./components/Imageslider";
import Call from "./components/Call";
import Reviewslider from "./components/Reviewslider";
import "./styles/App.css";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="app">
      <PhoneNum />
      <Navbar />
        <Pitch />
      <FadeInWhenVisible>
      <Imageslider />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Call />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Reviewslider />
      </FadeInWhenVisible>
      <Footer />
    </div>
  );
}

export default App;
