import { useState } from "react";

const Form = ({links, setLinks, setShortUrl, setOriginalUrl }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (url.trim().length === 0) {
        setError("Please add a link");
        return;
      }
      setError(null);
      setLoading(true)
      const response = await fetch("https://shrtr.top/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });
      if (!response.ok) {
        console.log(response)
        const message = await response.json()
        setError(message.errors.url[0])
        
        // setError()
        throw new Error("Failed to shorten url");
      }
      const data = await response.json();
      console.log(data)
      setLinks([data, ...links])
      setOriginalUrl(data.original_url);
      setShortUrl(data.short_url);
    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-5">
      <div className="absolute inset-x-5 -translate-y-1/2 flex flex-col items-center p-6 bg-purple-950 rounded-md bg-[url('/src/images/bg-shorten-mobile.svg')] bg-no-repeat bg-cover bg-top-left shadow-xl md:bg-[url('/src/images/bg-shorten-desktop.svg')] md:bg-cover md:bg-no-repeat md:bg-top-left">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-6 md:w-full"
        >
          <div className="w-full md:flex-1">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
              className={`w-full border-3 rounded-md py-2 px-4 focus:outline-black focus:outline-2 bg-white font-semibold  ${error ? "placeholder:text-red-300 border-red-500" : "border-gray-300 placeholder:text-gray-300"}`}
            />
            {error && (
              <p className="m-0 p-0 text-start text-red-500">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-400 text-white py-2 px-8 rounded-md flex justify-center items-center gap-2 hover:bg-cyan-500 font-bold transition duration-300 w-full md:w-auto disabled:opacity-60 cursor-pointer"
            onClick={handleSubmit}
          >
            {loading && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>}
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
