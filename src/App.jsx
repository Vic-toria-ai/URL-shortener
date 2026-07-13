import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl]=useState("")
  const [links, setLinks]=useState([])
  // https://shrtr.top/api/v1/shorten
  return (
    <div>
      <Navbar />
      <Hero />
      <Form setShortUrl={setShortUrl} setOriginalUrl={setOriginalUrl} setLinks={setLinks} links={links}/>
      <Stats shortUrl={shortUrl} originalUrl={originalUrl} links={links}/>
      <Footer />
    </div>
  );
}

export default App;
