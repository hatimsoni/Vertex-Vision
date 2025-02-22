import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accent p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-secondary" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-secondary" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-secondary" />
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-secondary" />
          </a>
        </div>
        <div className="mt-6 md:mt-0">
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg text-black"
            />
            <button type="submit" className="bg-secondary text-accent p-2 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        &copy; {new Date().getFullYear(2025)} Vertex Vision. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;