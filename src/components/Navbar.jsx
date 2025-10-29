import React, { useState } from "react";
import { FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full py-5 px-5 md:px-10 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-50">
      <h1 className="text-[20px] font-bold text-gray-900 font-poppins">
        MyProfile
      </h1>

      
      <ul className="hidden md:flex gap-8 text-gray-700 font-poppins font-semibold text-[16px]">
        <li><a href="#about" className="hover:text-[#7755FF] transition">About</a></li>
        <li><a href="#skills" className="hover:text-[#7755FF] transition">Skills</a></li>
        <li><a href="#portofolio" className="hover:text-[#7755FF] transition">Portofolio</a></li>
        <li><a href="#contact" className="hover:text-[#7755FF] transition">Contact</a></li>
      </ul>

      
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 text-white font-semibold text-[16px] px-4 md:px-6 py-2 rounded-lg 
                     bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
        >
          <FaPaperPlane />
          <span className="hidden md:inline">Hire Me</span>
        </button>

        
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-5 gap-5 shadow-md md:hidden">
          <li><a href="#about" className="hover:text-[#7755FF] transition" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" className="hover:text-[#7755FF] transition" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#portofolio" className="hover:text-[#7755FF] transition" onClick={toggleMenu}>Portofolio</a></li>
          <li><a href="#contact" className="hover:text-[#7755FF] transition" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
