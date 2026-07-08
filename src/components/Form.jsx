const Form = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-5">
      
      <div
        className="absolute inset-x-5 -translate-y-1/2 flex flex-col items-center p-6 bg-purple-950 rounded-md bg-[url('/src/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-top-left shadow-xl md:bg-[url('/src/images/bg-shorten-desktop.svg')] md:bg-cover md:bg-no-repeat md:bg-top-left"
      >
        <form className="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-6 md:w-full">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-black focus:outline-2 bg-white font-semibold md:flex-1"
          />

          <button className="bg-cyan-400 text-white py-2 px-8 rounded-md hover:bg-cyan-500 font-bold transition duration-300 w-full md:w-auto">
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
