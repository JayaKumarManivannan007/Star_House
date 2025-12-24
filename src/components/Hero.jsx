import { useState } from "react";
import LeftArrow from "../assets/left-arrow.png";
import RightArrow from "../assets/right.png";

// Hero images
import HeroMain from "../assets/Star House img.jpg";
import Hero1 from "../assets/Star House1.jpg";
import Hero2 from "../assets/Star House2.jpg";
import Hero3 from "../assets/Star House3.jpg";

export default function Hero() {
  const images = [HeroMain, Hero1, Hero2, Hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative mt-2 mb-6">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt={`Hero ${currentIndex}`}
          className="w-full transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Hero Text */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 text-white text-center px-6
          ${
            currentIndex === 2
              ? "top-10 sm:top-[70%] -translate-y-0 sm:-translate-y-1/2"
              : "top-[70%] -translate-y-1/2"
          }
        `}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Level up your style with our
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 font-semibold">
          Summer Collections
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200">
          Shop Now
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:scale-110 transition"
      >
        <img src={LeftArrow} alt="Left Arrow" className="h-12 w-12 sm:h-20 sm:w-20" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:scale-110 transition"
      >
        <img src={RightArrow} alt="Right Arrow" className="h-12 w-12 sm:h-20 sm:w-20" />
      </button>
    </section>
  );
}
