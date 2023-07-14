import { motion } from "framer-motion";
import Pitch from "../components/Pitch";
import Imageslider from "../components/Imageslider";
import Call from "../components/Call";
import Reviewslider from "../components/Reviewslider";
import BackToTopBtn from "./BackToTopBtn";

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

function Main() {
  return (
    <div className="main">
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
      <BackToTopBtn />
    </div>
  );
}

export default Main;
