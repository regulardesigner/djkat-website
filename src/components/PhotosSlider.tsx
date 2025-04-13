import { useEffect, useState } from 'react';
import djKat from '@assets/image-slider/dj_kat.png';
import djKatStudio from '@assets/image-slider/dj_kat_studio.png';
import djSetTremplin from '@assets/image-slider/dj_set_tremplin.png';
import djSetSceneOuverte from '@assets/image-slider/dj_set_scene_ouverte.png';
import './PhotosSlider.css';

const images = [
  {
    src: djKat,
    alt: 'DJ Kat'
  },
  {
    src: djKatStudio,
    alt: 'DJ Kat in studio'
  },
  {
    src: djSetTremplin,
    alt: 'DJ set at Tremplin'
  },
  {
    src: djSetSceneOuverte,
    alt: 'DJ set at Scene Ouverte'
  }
];

function PhotosSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goNextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function goPreviousSlide() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  function autoSlider() {
    const interval = setInterval(goNextSlide, 5000);
    return () => clearInterval(interval);
  }

  useEffect(() => {
    return autoSlider();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`slider-image ${index === currentIndex ? 'visible' : 'hidden'}`}
          />
        ))}
      </div>
      <button
        onClick={goPreviousSlide}
        className="slider-button prev"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={goNextSlide}
        className="slider-button next"
        aria-label="Next slide"
      >
        →
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`slider-dot ${index === currentIndex ? 'active' : 'inactive'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotosSlider;