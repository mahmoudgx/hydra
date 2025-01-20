import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import arrow2 from "../assets/arrow2.svg";
import simulation from "../assets/simulation.jpg";
import EDUCATION from "../assets/EDUCATION.jpg";
import SELFCARE from "../assets/SELF-CARE.jpg";
import outdoor from "../assets/outdoor.jpg";
import BuildCard from "./BuildCard";

const Build = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: simulation,
      title: "SIMULATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: EDUCATION,
      title: "EDUCATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: SELFCARE,
      title: "SELF-CARE",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      image: outdoor,
      title: "OUTDOOR",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
  ];

  return (
    <div className="py-8 md:py-16 lg:py-24 px-4 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  text-center md:text-left lg:gap-16 pb-[26px] md:pb-16 lg:pb-32">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">WHY BUILD</h1>
          <div className="flex items-center gap-4 md:gap-8">
            <h2 className="text-3xl md:text-4xl font-light mx-auto md:mx-0">
              WITH HYDRA?
            </h2>
            <img
              src={arrow2}
              alt="arrow"
              className="w-8 md:w-auto md:block hidden"
            />
          </div>
        </div>
        <div className="lg:max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg space-y-2 md:block hidden">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      {/* Desktop and Tablet Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {cards.map((card, index) => (
          <BuildCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="flex overflow-hidden">
          <BuildCard {...cards[activeIndex]} />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-[#3a3456]" />
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-[#3a3456]" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                activeIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Build;
