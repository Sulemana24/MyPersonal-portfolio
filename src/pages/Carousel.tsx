import React, { useState } from "react";

interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={images[current]}
        alt={`${title} screenshot ${current + 1}`}
        className="carousel-image"
      />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <p className="carousel-counter">
        {current + 1} / {length}
      </p>
    </div>
  );
};

export default Carousel;
