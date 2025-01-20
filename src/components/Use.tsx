import shape from "../assets/shape.svg";
import unreal from "../assets/unreal.svg";
import unity from "../assets/unity.svg";
import o from "../assets/o.svg";
import vive from "../assets/vive.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Use = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    { src: unreal, alt: "unreal" },
    { src: unity, alt: "unity" },
    { src: o, alt: "o" },
    { src: vive, alt: "vive" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + logos.length) % logos.length
    );
  };

  return (
    <div className="relative py-6 px-4 md:py-[90px] md:px-[84px]">
      {/* Hero Section */}
      <div className="w-full md:w-[1278px] h-[200px] md:h-[303px] flex justify-center text-center items-center bg-[url('D:\Projects\hydra\src\assets\use.jpg')] bg-no-repeat bg-cover bg-center rounded-3xl md:rounded-full mx-auto">
        <div className="px-4">
          <h1 className="text-2xl md:text-[36px] font-bold">
            TECHNOLOGIES & HARDWARE
          </h1>
          <h2 className="text-2xl md:text-[36px] font-light">
            USED BY HYDRA VR.
          </h2>
        </div>
      </div>

      {/* Center Circle */}
      <div className="bg-[#0D0D0D] bg-opacity-[32%] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-[180px] md:top-[240px]">
        <div className="flex items-center justify-center absolute w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)]">
          <img src={shape} alt="shape" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative mt-[100px] md:mt-[120px] max-w-screen-lg mx-auto">
        {/* Navigation Arrows - Mobile Only */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-[#8176AF] hover:bg-[#C0B7E8] transition-colors p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-[#8176AF] hover:bg-[#C0B7E8] transition-colors p-2 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Logo Display */}
        <div className="flex justify-center items-center px-12">
          {/* Mobile: Show one logo */}
          <div className="block md:hidden">
            <img
              src={logos[currentIndex].src}
              alt={logos[currentIndex].alt}
              className="max-w-[200px] h-auto mx-auto"
            />
          </div>

          {/* Desktop: Show all logos */}
          <div className="hidden md:flex space-x-[90px] items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-w-[200px] h-auto"
              />
            ))}
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {logos.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-[#C0B7E8]" : "bg-[#8176AF]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Use;
