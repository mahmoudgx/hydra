const Contact = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 lg:px-20">
      <div
        className="flex flex-col w-full max-w-5xl mx-auto rounded-3xl lg:rounded-[100px] shadow-xl p-6 md:p-10"
        style={{
          backgroundImage:
            "radial-gradient(circle closest-side, #433d60, #211e2e 98%)",
        }}
      >
        <div className="text-center items-center flex flex-col">
          <h1 className="pt-6 md:pt-12 text-2xl md:text-4xl font-bold pb-4 md:pb-8">
            JOIN HYDRA
          </h1>
          <hr className="w-48 md:w-96 border-[1px]" />
          <h2 className="text-xl md:text-3xl font-light pt-4 md:pt-6 pb-8 md:pb-12 px-4 text-center">
            Let's Build Your VR Experience
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-4xl mx-auto w-full">
          <input
            type="text"
            placeholder="First Name"
            className="w-full md:w-1/2 h-14 md:h-16 rounded-3xl bg-transparent border-2 px-6 text-white placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full md:w-1/2 h-14 md:h-16 rounded-3xl bg-transparent border-2 px-6 text-white placeholder:text-white"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-4xl mx-auto w-full mt-4 md:mt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 h-14 md:h-16 rounded-3xl bg-transparent border-2 px-6 text-white placeholder:text-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full md:w-1/2 h-14 md:h-16 rounded-3xl bg-transparent border-2 px-6 text-white placeholder:text-white"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full mt-4 md:mt-6">
          <input
            type="text"
            placeholder="Subject"
            className="w-full h-14 md:h-16 rounded-3xl bg-transparent border-2 px-6 text-white placeholder:text-white"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full mt-4 md:mt-6">
          <textarea
            placeholder="Tell Us Something..."
            className="w-full h-40 md:h-52 rounded-3xl bg-transparent border-2 px-6 py-4 text-white placeholder:text-white resize-none"
          />
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] py-3 md:py-4 px-8 md:px-10 rounded-3xl text-sm md:text-base font-bold hover:opacity-90 transition-opacity">
            SEND TO HYDRA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
