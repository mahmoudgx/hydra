import logofooter from "../assets/logofooter.svg";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const icons = [Facebook, Twitter, Linkedin, Instagram, Youtube];
  return (
    <div className="pt-10 pb-10 px-6 sm:px-12 md:px-20 lg:px-[84px] bg-[url('D:/Projects/hydra/src/assets/footer-bg.svg')] bg-no-repeat bg-contain">
      <div className="flex flex-col md:flex-row md:items-start">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 md:pr-8">
          <img
            className="mx-auto md:mx-0 pr-0 md:pr-[100px]"
            src={logofooter}
            alt="footer logo"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block border-l-[6px] h-[196px]"></div>

        {/* Links Section 1 */}
        <div className="pl-0 md:pl-[81px] pr-0 md:pr-[104px] mb-6 md:mb-0 md:block hidden">
          <ul className="text-center md:text-left text-[14px] md:text-[16px] font-bold space-y-5">
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TECHNOLOGIES</li>
            <li>HOW TO</li>
            <li>JOIN HYDRA</li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block border-l-[6px] h-[196px]"></div>

        {/* Links Section 2 */}
        <div className="pl-0 md:pl-[81px] pr-0 md:pr-[104px] mb-6 md:mb-0 md:block hidden">
          <ul className="text-center md:text-left text-[14px] md:text-[16px] font-bold space-y-5">
            <li>F.A.Q</li>
            <li>SITEMAP</li>
            <li>TECHNOLOGIES</li>
            <li>CONDITIONS</li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block border-l-[6px] h-[196px]"></div>

        {/* Socialize Section */}
        <div className="pl-0 md:pl-[81px] pr-0 md:pr-[71px]">
          <h1 className="text-center md:text-left text-[14px] md:text-[16px] font-bold pb-4">
            SOCIALIZE WITH HYDRA
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 pb-6">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-[#C0B7E8] flex items-center justify-center"
              >
                <Icon color="#343045" size={16} />
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <button className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] py-4 px-6 rounded-full text-[12px] font-bold">
              BUILD YOUR WORLD
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full md:w-[1269px] border-t-2 mx-auto my-8"></div>

      {/* Footer Bottom Text */}
      <div>
        <h1 className="text-center text-[12px] md:text-[14px] font-bold tracking-wide">
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
        </h1>
      </div>
    </div>
  );
};

export default Footer;
