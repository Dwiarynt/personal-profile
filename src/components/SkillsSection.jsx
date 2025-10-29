import React from "react";
import { Code, Layout, Palette, PenTool } from "lucide-react";

function SkillsSection() {
  const skills = [
    {
      icon: <Layout size={36} className="text-[#FF54B0]" />,
      title: "UI/UX Design",
      desc: "Figma, Adobe XD, Sketch",
      bg: "bg-[#F0E7FF]",
    },
    {
      icon: <Code size={36} className="text-[#7755FF]" />,
      title: "Frontend Dev",
      desc: "React, Vue, Tailwind",
      bg: "bg-[#E0EAFE]",
    },
    {
      icon: <PenTool size={36} className="text-[#F9C74F]" />,
      title: "Branding",
      desc: "Logo, Identity, Print",
      bg: "bg-[#FFE978]",
    },
    {
      icon: <Palette size={36} className="text-[#7755FF]" />,
      title: "Motion Graphic",
      desc: "After Effects, Lottie",
      bg: "bg-[#E0EAFE]",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-5 md:px-10 bg-white text-center font-['Poppins']"
    >
      <h2 className="text-[28px] md:text-[30px] font-bold text-gray-900 mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} rounded-2xl p-6 md:p-8 shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}
          >
            <div className="flex justify-center mb-4 md:mb-5">{skill.icon}</div>
            <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900 mb-2">
              {skill.title}
            </h3>
            <p className="text-[14px] text-gray-700">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
