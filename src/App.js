import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-primary text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
