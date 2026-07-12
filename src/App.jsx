import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl]=useState("")
  // https://shrtr.top/api/v1/shorten
  return (
    <div>
      <Navbar />
      <Hero />
      <Form setShortUrl={setShortUrl} setOriginalUrl={setOriginalUrl} />
      <Stats shortUrl={shortUrl} originalUrl={originalUrl} />
      <Footer />
    </div>
  );
}

export default App;
