import React from "react";
import profile from "../assets/images/profile.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col-reverse md:flex-row items-center justify-between 
             w-full px-5 md:px-10 pt-32 md:pt-40 pb-20
             bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF] overflow-hidden"
    > 
      
      <div className="text-left max-w-xl font-['Poppins'] w-full md:w-1/2">
        <p className="text-[#7755FF] font-semibold text-[14px] mb-4 md:mb-6">
          Hello, I’m Dwi Ariyanti
        </p>

        <h1 className="text-[36px] md:text-[48px] font-extrabold text-gray-900 leading-tight mb-6">
          Creative Designer & <br />
          Frontend Developer
        </h1>

        <p className="text-gray-700 text-[16px] md:text-[18px] font-normal mb-8 leading-relaxed">
          Passionate in creating beautiful and functional digital experiences.
          I love blending creativity with technology to make impactful solutions for users and brands.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <button
            className="text-white font-semibold text-[16px] px-4 md:px-6 py-3 rounded-lg 
                       bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
          >
            See My Work
          </button>

          <button
            onClick={scrollToContact} 
            className="text-[#7755FF] font-semibold text-[16px] border border-[#7755FF] px-4 md:px-6 py-3 rounded-lg hover:bg-[#f3ebff] transition"
          >
            Contact Me
          </button>
        </div>

        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/dwi.arynt/" target="_blank" rel="noreferrer">
            <FaInstagram className="w-[24px] h-[24px] text-[#E1306C] hover:opacity-80 transition" />
          </a>
          <a href="https://github.com/Dwiarynt" target="_blank" rel="noreferrer">
            <FaGithub className="w-[24px] h-[24px] text-[#24292E] hover:opacity-80 transition" />
          </a>
          <a href="https://www.linkedin.com/in/dwiarynt/" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-[24px] h-[24px] text-[#0A66C2] hover:opacity-80 transition" />
          </a>
        </div>
      </div>

      
      <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl"
        />
      </div>
    </section>
  );
}

export default HeroSection;
