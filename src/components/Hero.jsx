import illustration from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center md:gap-20 ">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center    ">
          <img
            src={illustration}
            alt="Hero Image"
            className="w-full h-auto object-contain md:mt-4 md:translate-x-20 "
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-gray-800">
            More than just shorter links
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center md:text-left font-semibold ">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full mt-6 hover:bg-cyan-500 transition duration-300 mb-6">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
