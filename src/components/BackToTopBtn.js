import React from "react";
import { useEffect, useState } from "react";
import "../styles/BackToTopBtn.css";

function BackToTopBtn() {
  const [BackToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="to-top-container">
      {BackToTopBtn && (
        <button onClick={scrollUp} className="to-top-btn">
          To Top
        </button>
      )}
    </div>
  );
}

export default BackToTopBtn;
