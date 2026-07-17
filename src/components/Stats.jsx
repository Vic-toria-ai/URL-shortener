import { useState } from "react";

const Stats = ({ links }) => {
  const [copiedLink, setCopiedLink] = useState("");
  async function handleCopy(value) {
    try {
      const result = await window.navigator.clipboard.writeText(value);
      setCopiedLink(value);
      console.log(result);
    } catch (e) {
      console.warn(e);
    }
  }
  return (
    <div className="bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto text-center mt-10 md:mt-0 p-8 ">
        {/* short linkbox */}

        {links &&
          links.map((link) => (
            <div
              key={link.code}
              className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-8 font-semibold rounded-md mb-8 md:gap-4 md:py-2"
            >
              <span className="text-gray-800">{link.original_url}</span>
              <hr className="md:hidden text-gray-300 m-2" />

              <div className=" flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0 ">
                <span className="text-cyan-500 ">{link.short_url}</span>
              
                  <button
                    onClick={() => handleCopy(link.short_url)}
                    className={`${copiedLink === link.short_url ? "bg-purple-950" : "bg-cyan-400 hover:bg-cyan-500"} text-white mt-4 md:mt-0 py-2 px-8 rounded-md font-bold transition duration-300 w-full md:w-auto cursor-pointer`}
                  >
                    {copiedLink === link.short_url ? "Copied!" : "Copy"}
                  </button>
                
              </div>
            </div>
          ))}

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Advanced Statistics
        </h2>

        <p className="mt-5 text-gray-500 md:leading-7 font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* the cards */}
      {/* another way to do the cards parts is to map them in, but that was slightly more diffucult because of the positioning and all. */}
      <section className="relative max-w-6xl mx-auto mt-20 px-5 md:flex md:justify-between md:gap-4">
        {/* horizonal line */}
        <div className="absolute bg-cyan-400 left-1/2 -translate-x-1/2 top-16 w-2 h-[520px]  md:right-0 md:translate-x-0 md:top-1/2 md:h-2 md:w-[70%] md:left-[16%]"></div>

        <div className="relative z-10 bg-white p-6 rounded-md shadow-md md:w-1/3 md:mt-0">
          {/* icon background */}
          <div className="bg-purple-950 w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0">
            {/* card image */}
            <img
              src="/src/images/icon-brand-recognition.svg"
              alt="Brand Recognition"
              className="w-8 h-8"
            />
          </div>
          {/* card title */}
          <h4 className="text-lg font-bold text-gray-800 mt-8 text-center md:text-left">
            Brand Recognition
          </h4>
          {/* card description */}
          <p className="mt-4 text-gray-500 text-center md:text-left font-semibold ">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* card 2 */}
        <div className="bg-white p-6 rounded-md shadow-md relative md:w-1/3 mt-15 md:mt-10">
          {/* icon background */}
          <div className="bg-purple-950 w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0">
            {/* card image */}
            <img
              src="/src/images/icon-detailed-records.svg"
              alt="Detailed Records"
              className="w-8 h-8"
            />
          </div>
          {/* card title */}
          <h4 className="text-lg font-bold text-gray-800 mt-8 text-center md:text-left">
            Detailed Records
          </h4>
          {/* card description */}
          <p className="mt-4 text-gray-500 text-center md:text-left font-semibold ">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your contents helps inform better
            decisions.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-white p-6 rounded-md shadow-md relative md:w-1/3 mt-15 md:mt-20">
          {/* icon background */}
          <div className="bg-purple-950 w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0">
            {/* card image */}
            <img
              src="/src/images/icon-fully-customizable.svg"
              alt="Fully Customizable"
              className="w-8 h-8"
            />
          </div>
          {/* card title */}
          <h4 className="text-lg font-bold text-gray-800 mt-8 text-center md:text-left">
            Fully Customizable
          </h4>
          {/* card description */}
          <p className="mt-4 text-gray-500 text-center md:text-left font-semibold ">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
      {/* CTA section */}
      <div className="bg-[url('/src/images/bg-boost-mobile.svg')] bg-no-repeat bg-cover bg-top-left md:bg-[url('/src/images/bg-boost-desktop.svg')] md:bg-cover md:bg-no-repeat md:bg-top-left bg-purple-950 mt-14  mx-auto text-center p-8 w-full h-full">
        <h3 className="text-center text-2xl font-bold text-white">
          Boot your links today
        </h3>
        <button className="bg-cyan-400 text-white py-2 px-6 rounded-full hover:bg-cyan-500 font-bold transition duration-300 md:w-auto mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Stats;
