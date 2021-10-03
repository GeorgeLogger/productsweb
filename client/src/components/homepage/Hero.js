import "./Hero.css";
import { useState, useEffect, useRef } from "react";
import { Button } from "reactstrap";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "bakery-1",
      imgDir: "/images/bakery-1.jpg",
    },
    {
      id: 2,
      title: "bakery-2",
      imgDir: "/images/bakery-2.jpg",
    },
    {
      id: 3,
      title: "bakery-2",
      imgDir: "/images/bakery-2.jpg",
    },
  ];

  const showControl = false;
  const [activeSlide, setActiveSlide] = useState(0);
  const autoSlide = useRef();

  useEffect(() => {
    autoSlide.current = NextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoSlide.current();
    };

    const id = setInterval(play, 2000);
    return () => clearInterval(id);
  }, [activeSlide]);

  const NextSlide = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };

  const PrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(slides.length - 1);
    }
  };

  return (
    <section id="hero">
      <div className="hero-container">
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            activeSlide={activeSlide}
            index={index}
          />
        ))}
      </div>
      {slides.length > 1 && showControl && (
        <div className="hero-nav">
          <Button onClick={PrevSlide}>Prev</Button>
          <Button onClick={NextSlide}>Next</Button>
        </div>
      )}
    </section>
  );
};

const Slide = ({ slide, activeSlide, index }) => {
  return (
    <div
      className="slide"
      style={{
        left: `${index * 100}%`,
        transform: `translateX(-${activeSlide * 100}%)`,
      }}
    >
      <img src={slide.imgDir} alt={slide.title} />
    </div>
  );
};

export default Hero;
