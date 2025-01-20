import arrow2 from "../assets/arrow2.svg";
import intoimg from "../assets/intro-img.jpg";

const Intro = () => {
  return (
    <div className=" py-[90px] md:px-[84px] px-[15px]">
      <div className=" flex md:flex-row flex-col md:justify-between items-center">
        <div>
          <h1 className=" text-[36px] font-bold text-center md:text-left">
            INTRODUCTION
          </h1>
          <div className=" flex items-center space-x-[30px]">
            <h2 className=" text-[36px] font-light text-center md:text-left mx-auto md:mx-0">
              TO HYDRA VR
            </h2>
            <img className=" md:block hidden" src={arrow2} alt="arrow" />
          </div>
        </div>
        <div>
          <p className=" text-[16px] md:block hidden">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat<br></br> nibh sed pulvinar proin gravida hendrerit
            lectus. Mi sit amet mauris commodo<br></br> quis imperdiet massa
            tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
            <br></br> lectus sit amet est placerat in. Lectus magna fringilla
            urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundPosition: "50%" }}
        className=" grid md:grid-cols-2 grid-cols-1 md:gap-[118px] items-center md:pt-[90px] pt-[36px] md:bg-[url('D:\Projects\hydra\src\assets\aboutbg.svg')] bg-no-repeat bg-contain"
      >
        <div>
          <img
            className="object-cover border-black md:w-[524px] w-[336px] md:h-[557px] h-[358px] shadow-md md:[border-radius:240px_100px_240px_100px] [border-radius:140px_60px_140px_60px]"
            src={intoimg}
            alt="intro image"
          />
        </div>
        <div className=" flex flex-col md:justify-left md:items-start justify-center items-center mx-auto">
          <h1 className=" text-[36px] font-bold md:block hidden">ABOUT</h1>
          <h2 className=" text-[36px] font-light md:block hidden">HYDRA VR</h2>
          <p className=" text-[16px] md:pt-[42px] pt-[50px] md:pb-[28px] pb-[34px]">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] md:py-[16px] py-[20px] md:px-[38px] px-[63px] rounded-[40px] md:text-[12px] text-[14px] font-bold ">
            LET’S GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
