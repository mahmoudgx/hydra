import React, { useState } from "react";
import arrow2 from "../assets/arrow2.svg";
import shapetwo from "../assets/shapetwo.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
}

interface StepComponentProps {
  number: string;
  title: string;
  showShape?: boolean;
}

const How = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps: Step[] = [
    {
      number: "01",
      title: "3D Conception & Design",
    },
    {
      number: "02",
      title: "Interaction Design",
    },
    {
      number: "03",
      title: "VR World User Testing",
    },
    {
      number: "04",
      title: "Hydra VR Deploy",
    },
  ];

  const nextStep = () => {
    setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const StepComponent: React.FC<StepComponentProps> = ({
    number,
    title,
    showShape = true,
  }) => (
    <div className="flex flex-col space-y-[25px] my-auto items-center">
      <div className="bg-[#0D0D0D] bg-opacity-[32%] w-[198px] h-[198px] rounded-full flex justify-center items-center">
        <div className="flex justify-center items-center w-[159px] h-[159px] rounded-full bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)]">
          <h1 className="text-[64px] font-bold text-[#343045]">{number}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-full relative">
        {showShape && (
          <img className="md:block hidden" src={shapetwo} alt="shape" />
        )}
        <button
          onClick={prevStep}
          className="absolute left-0 p-2 text-white hover:text-gray-300 md:hidden"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[24px] font-bold whitespace-pre-line text-center px-12">
          {title}
        </h1>
        <button
          onClick={nextStep}
          className="absolute right-0 p-2 text-white hover:text-gray-300 md:hidden"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );

  return (
    <div
      style={{ backgroundPosition: "50% 65%" }}
      className="md:bg-[url('D:\Projects\hydra\src\assets\bline.svg')] bg-no-repeat bg-contain py-[45px] md:py-[90px] px-4 md:px-[84px]"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-[60px] md:pb-[125px]">
        <div className="text-center md:text-left">
          <h1 className="text-[28px] md:text-[36px] font-bold">HOW WE BUILD</h1>
          <div className="flex items-center justify-center md:justify-start md:space-x-[316px]">
            <h2 className="text-[28px] md:text-[36px] font-light">5</h2>
            <img className="md:block hidden" src={arrow2} alt="arrow" />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-[14px] md:text-[16px] text-center md:text-left md:block hidden">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat<br></br> nibh sed pulvinar proin gravida hendrerit
            lectus. Mi sit amet mauris commodo<br></br> quis imperdiet massa
            tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
            <br></br> lectus sit amet est placerat in. Lectus magna fringilla
            urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full">
        <div className="flex justify-center">
          <StepComponent
            number={steps[currentIndex].number}
            title={steps[currentIndex].title}
            showShape={false}
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:items-center md:justify-around">
        {steps.map((step) => (
          <StepComponent
            key={step.number}
            number={step.number}
            title={step.title}
          />
        ))}
      </div>
    </div>
  );
};

export default How;
