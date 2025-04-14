import { useEffect, useRef, useState } from 'react';
import ReactSwipe from 'react-swipe';

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

  const swipeRef = useRef<ReactSwipe>(null);

  function goNextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex); 
    swipeRef.current?.next();
  }

  function goPreviousSlide() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    swipeRef.current?.prev();
  }

  function goToSlide(index: number) {
    setCurrentIndex(index);
    swipeRef.current?.slide(index, 0);
  }

  function autoSlider() {
    const interval = setInterval(goNextSlide, 15000);
    return () => clearInterval(interval);
  }

  useEffect(() => {
    return autoSlider();
  }, []);

  return (
    <div className="slider-container">
      <ReactSwipe
        ref={swipeRef}
        className="slider-wrapper"
        swipeOptions={{
          continuous: true,
          auto: 15000,
          disableScroll: false,
          stopPropagation: false,
          speed: 500,
          startSlide: 0,
          callback: (index: number) => {
            setCurrentIndex(index);
          }
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="slider-image"
            />
          </div>
        ))}
      </ReactSwipe>
      <button
        onClick={goPreviousSlide}
        className="slider-button prev"
        aria-label="Previous slide"
      >
        previous photo
      </button>
      <button
        onClick={goNextSlide}
        className="slider-button next"
        aria-label="Next slide"
      >
        next photo
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot slider-dot-${index} ${currentIndex === index ? 'active' : 'inactive'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotosSlider;