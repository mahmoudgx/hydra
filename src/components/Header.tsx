import logo from "../assets/logo.svg";
import { useState } from "react";
import hamburgerIcon from "../assets/hamburger.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between pt-6 px-6 sm:px-12 md:px-20 lg:px-[84px]">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0 flex justify-between w-full md:w-auto">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[60px] sm:w-[150px] sm:h-[80px] md:w-[193px] md:h-[103px]"
        />
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={hamburgerIcon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-[42px] text-[10px] sm:text-[12px] font-bold uppercase`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-[42px]">
          <li>about</li>
          <li>SERVICES</li>
          <li>TECHNOLOGIES</li>
          <li>HOW TO</li>
        </ul>
      </div>

      {/* Buttons Section */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 text-[10px] sm:text-[12px] font-bold`}
      >
        <button className="border-[2px] border-white py-3 px-6 sm:py-[16px] sm:px-[38px] rounded-[40px]">
          CONTACT US
        </button>
        <button className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] py-3 px-6 sm:py-[16px] sm:px-[38px] rounded-[40px] text-black">
          JOIN HYDRA
        </button>
      </div>
    </div>
  );
};

export default Header;
