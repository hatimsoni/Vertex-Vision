import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-accent to-secondary">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">Welcome to Vertex Vision</h1>
        <p className="mt-4 text-xl">Your Digital Transformation Partner</p>
        <button className="mt-8 px-6 py-3 bg-secondary text-accent rounded-lg hover:bg-purple-700">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;