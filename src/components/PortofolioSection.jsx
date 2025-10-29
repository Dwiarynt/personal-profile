import React from 'react';
import img1 from '../assets/images/work1.png';
import img2 from '../assets/images/work2.png';
import img3 from '../assets/images/work3.png'; 
import { FaDribbble } from "react-icons/fa";

function PortofolioSection() {
  const projects = [
    {
      id: 1,
      title: "Dashboard Web App",
      category: "UI Design",
      desc: "UI/UX, Frontend",
      img: img1,
      color: "bg-[#E7D4FF] text-[#8B5CF6]", 
    },
    {
      id: 2,
      title: "Mobile App Landing",
      category: "Mobile App",
      desc: "Design, Branding",
      img: img2,
      color: "bg-[#FFE9CC] text-[#F97316]", 
    },
    {
      id: 3,
      title: "Motion Graphic",
      category: "Motion",
      desc: "Animation, Branding",
      img: img3,
      color: "bg-[#E5E7EB] text-[#EAB308]", 
    },
  ];

  return (
    <section
      id="portofolio"
      className="py-20 bg-[#E5E7EB] text-center font-poppins flex flex-col items-center justify-center px-5 md:px-10"
    >
      <h3 className="text-3xl font-bold text-gray-800 mb-12">Portofolio</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-[341px] bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition mx-auto"
          >
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />
              <span
                className={`absolute top-3 right-3 text-[12px] font-semibold px-3 py-1 rounded-full ${project.color}`}
              >
                {project.category}
              </span>
            </div>

            <div className="p-4 text-left">
              <h4 className="text-[18px] font-bold text-gray-800 mb-1">
                {project.title}
              </h4>
              <p className="text-[14px] text-gray-600">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

        
     <a
      href="https://dribbble.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-12 flex items-center gap-2 text-white font-semibold text-[16px] px-6 py-3 rounded-lg 
             bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
      >
        <FaDribbble className="text-white" />
        More on Dribbble
    </a>
    </section>
  );
}

export default PortofolioSection;
