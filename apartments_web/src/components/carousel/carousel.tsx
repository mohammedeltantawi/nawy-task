import React, { useState } from 'react';
import './carousel.styles.css';

const Carousel = ({ images }: { images: string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute inset-0 flex items-center justify-between h-full">
        <button
          onClick={prevSlide}
          className="text-white bg-gray-600 bg-opacity-50 hover:bg-opacity-75 p-2 h-full w-[50px]"
        >
          &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-gray-600 bg-opacity-60 hover:bg-opacity-75 p-2 h-full w-[50px]"
        >
          &#9654;
        </button>
      </div>
      <div className="w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-200'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
