import React from "react";
import profile from "../assets/images/profile.jpg"; 
import { FaPaperPlane, FaCheck } from "react-icons/fa";

function AboutSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-20 px-5 md:px-10 flex flex-col md:flex-row items-center justify-center md:gap-24 gap-10 bg-[#E5E7EB]"
    >
      
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 md:w-[288px] md:h-[288px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      
      <div className="max-w-lg text-left font-['Poppins'] w-full">
        <h2 className="text-[28px] md:text-[30px] font-bold text-gray-900 mb-4">About Me</h2>

        <p className="text-[16px] md:text-[18px] font-normal text-gray-600 mb-8 leading-relaxed">
          Hi! I’m Dwi, a passionate designer and frontend developer based in
          Surabaya. With a background in visual design and a love for coding, I
          specialize in building websites and apps that are not only stunning
          but also user-friendly.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="flex items-center gap-2 bg-[#F0E7FF] text-[#7755FF] text-[14px] font-semibold px-4 py-2 rounded-lg">
            <FaCheck /> UI/UX Design
          </span>
          <span className="flex items-center gap-2 bg-[#F0E7FF] text-[#7755FF] text-[14px] font-semibold px-4 py-2 rounded-lg">
            <FaCheck /> Web Development
          </span>
          <span className="flex items-center gap-2 bg-[#F0E7FF] text-[#7755FF] text-[14px] font-semibold px-4 py-2 rounded-lg">
            <FaCheck /> Branding
          </span>
          <span className="flex items-center gap-2 bg-[#F0E7FF] text-[#7755FF] text-[14px] font-semibold px-4 py-2 rounded-lg">
            <FaCheck /> Motion Graphics
          </span>
        </div>

        <button
          onClick={handleScrollToContact}
          className="flex items-center gap-2 text-white font-semibold text-[16px] px-6 py-3 rounded-lg 
                     bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
        >
          <FaPaperPlane className="text-white" />
          Let’s Connect
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
