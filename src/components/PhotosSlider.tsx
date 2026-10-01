import { useMemo, useRef, useState, type CSSProperties } from "react";
import ReactSwipe from "react-swipe";

import djKat from "@assets/image-slider/dj_kat.webp";
import djKatStudio from "@assets/image-slider/dj_kat_studio.webp";
import djSetTremplin from "@assets/image-slider/dj_set_tremplin.webp";
import djSetSceneOuverte from "@assets/image-slider/dj_set_scene_ouverte.webp";

import "./PhotosSlider.css";

const AUTOPLAY_DELAY = 15000;
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 912;

const images = [
  {
    src: djKat,
    alt: "DJ Kat",
  },
  {
    src: djKatStudio,
    alt: "DJ Kat in studio",
  },
  {
    src: djSetTremplin,
    alt: "DJ set at Tremplin",
  },
  {
    src: djSetSceneOuverte,
    alt: "DJ set at Scene Ouverte",
  },
];

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function PhotosSlider() {
  const swipeRef = useRef<ReactSwipe>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion());
  const [isInteracting, setIsInteracting] = useState(false);

  // react-swipe re-creates the slider whenever these options change,
  // so they must stay referentially stable across renders.
  const swipeOptions = useMemo(
    () => ({
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      speed: prefersReducedMotion() ? 0 : 500,
      startSlide: 0,
      callback: (index: number) => setActiveIndex(index),
    }),
    [],
  );

  return (
    <section
      className="slider-container"
      aria-roledescription="carousel"
      aria-label="Photos of DJ Kat"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={() => setIsInteracting(false)}
    >
      <div className="slider-viewport" aria-live={isPlaying ? "off" : "polite"}>
        <ReactSwipe
          ref={swipeRef}
          className="slider-wrapper"
          swipeOptions={swipeOptions}
        >
          {images.map((image, index) => (
            <div
              key={image.src}
              style={{ width: "100%", height: "100%" }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${images.length}`}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="slider-image"
              />
            </div>
          ))}
        </ReactSwipe>
      </div>
      <button
        type="button"
        onClick={() => swipeRef.current?.prev()}
        className="slider-button prev"
      >
        Previous photo
      </button>
      <button
        type="button"
        onClick={() => swipeRef.current?.next()}
        className="slider-button next"
      >
        Next photo
      </button>
      <button
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        className="button is-small is-dark slider-toggle"
      >
        {isPlaying ? "Pause slideshow" : "Play slideshow"}
        {isPlaying && (
          // The bar's animation is the autoplay timer: the next slide is
          // shown when it ends. Keyed by slide so it restarts on every change.
          <span
            key={activeIndex}
            className="slider-toggle__progress"
            aria-hidden="true"
            style={
              {
                "--autoplay-delay": `${AUTOPLAY_DELAY}ms`,
                animationPlayState: isInteracting ? "paused" : "running",
              } as CSSProperties
            }
            onAnimationEnd={() => swipeRef.current?.next()}
          />
        )}
      </button>
    </section>
  );
}

export default PhotosSlider;
