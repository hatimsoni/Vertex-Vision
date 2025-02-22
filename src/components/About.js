import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-accent mb-4">About Us</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            At Vertex Vision, we specialize in digital marketing, website development, SEO, UI/UX design, and graphic design. Our mission is to help businesses grow by providing innovative and effective digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;