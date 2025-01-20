interface Props {
  image: string;
  title: string;
  description: string;
}

const BuildCard = ({ image, title, description }: Props) => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle closest-side, #433d60, #211e2e 98%)",
      }}
      className="w-full max-w-xs mx-auto flex flex-col items-center rounded-3xl shadow-md py-6 px-4 md:py-10 md:px-8 lg:px-12"
    >
      {/* Image Container */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.13)",
        }}
        className="w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center rounded-full"
      >
        <div className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover rounded-full"
            src={image}
            alt={title}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="py-4 md:py-5 text-xl md:text-2xl font-bold text-center">
        {title}
      </h1>

      {/* Divider */}
      <div className="w-32 md:w-40 border border-[#C0B7E8] opacity-30"></div>

      {/* Description */}
      <p className="text-xs md:text-sm text-left pt-4 md:pt-5 pb-6 md:pb-8 max-w-[250px]">
        {description}
      </p>

      {/* Button with gradient background */}
      <button
        className="text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                   py-3 md:py-4 px-8 md:px-10 rounded-full text-xs md:text-sm font-bold
                   hover:opacity-90 transition-opacity duration-300"
      >
        TRY IT NOW
      </button>
    </div>
  );
};

export default BuildCard;
