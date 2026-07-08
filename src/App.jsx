import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';
import Stats from './components/Stats';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;