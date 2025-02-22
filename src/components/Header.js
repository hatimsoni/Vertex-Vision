import React from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="fixed w-full bg-accent p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary">Vertex Vision</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-secondary">Home</a>
          <a href="#about" className="hover:text-secondary">About Us</a>
          <a href="#services" className="hover:text-secondary">Services</a>
          <a href="#pricing" className="hover:text-secondary">Pricing</a>
          <a href="#blog" className="hover:text-secondary">Blog</a>
          <a href="#contact" className="hover:text-secondary">Contact Us</a>
        </nav>
        <FaBars className="md:hidden text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;