import arrow from "../assets/arrow.svg";
import heroimg from "../assets/hero-img.jpg";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import React from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contactItems = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Give Us a Call",
      content: "(110) 1111-1010",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Send Us a Message",
      content: "Contact@HydraVTech.com",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === contactItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? contactItems.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className=" md:px-[84px]  md:py-[84px] py-[46px] ">
        <div className=" flex md:flex-row flex-col md:justify-between justify-center mx-auto text-center md:text-left items-center">
          <div className="order-2 md:order-1">
            <div className=" pb-[36px] pt-[40px] md:pt-0">
              <h1 className=" font-bold md:text-[40px] text-[24px]">
                <span className="md:text-[46px] text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
                  Dive
                </span>{" "}
                Into The Depths
              </h1>
              <h2 className=" md:text-[40px] text-[24px] font-bold">
                Of{" "}
                <span className=" md:text-[46px] text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
                  Virtual Reality
                </span>
              </h2>
            </div>
            <p className=" pb-[66px] text-[16px] md:block hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></br>,
              sed do eiusmod tempor incididunt ut labore et dolore<br></br> nisl
              tincidunt eget. Lectus mauris eros in vitae .
            </p>
            <div className=" flex items-center space-x-[40px] ">
              <button className="text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] mx-auto md:mx-0 py-[16px] md:px-[38px] px-[68px] rounded-[40px] md:text-[12px] text-[14px] font-bold">
                BUILD YOUR WORLD
              </button>
              <img className=" md:block hidden" src={arrow} alt="arrow" />
            </div>
          </div>
          <div
            style={{
              borderRadius: "100px 100px 100px 240px",
              backgroundColor: "rgba(0, 0, 0, 0.13)",
            }}
            className="md:w-[524px] md:h-[455px] w-[340px] h-[296px] items-center flex justify-center order-1 md:order-2 "
          >
            <div>
              <img
                style={{ borderRadius: "100px 100px 100px 240px" }}
                className="object-cover border-black md:w-[490px] md:h-[426px] w-[318px] h-[277px] shadow-md"
                src={heroimg}
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-20 lg:px-24">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between px-14 py-6 text-white items-center shadow-md rounded-full bg-gradient-to-r from-[#3a3456] to-[#211e2e]">
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-4">
                {item.icon}
                <div>
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-sm">{item.content}</p>
                </div>
              </div>
              {index < contactItems.length - 1 && (
                <div className="border-l border-[#C0B7E8] opacity-30 h-28" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <div className="bg-gradient-to-r from-[#3a3456] to-[#211e2e] rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-4">
              {contactItems[currentSlide].icon}
              <div>
                <h1 className="text-xl font-bold">
                  {contactItems[currentSlide].title}
                </h1>
                <p className="text-sm">{contactItems[currentSlide].content}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-1 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-[#3a3456]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-1 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-[#3a3456]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {contactItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
