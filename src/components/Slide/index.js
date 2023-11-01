import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.scss";

function Slide({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  function handleDotClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="slideshow__container">
      <div className="slideshow__main">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <div className="slideshow__controls">
          <button className="left" onClick={prevSlide}>
            <LeftOutlined />
          </button>
          <button className="right" onClick={nextSlide}>
            <RightOutlined />
          </button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="slideshow__thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;
