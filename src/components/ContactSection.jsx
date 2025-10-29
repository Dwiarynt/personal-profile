import React from 'react';
import { Mail, Phone, Instagram, Github, Linkedin } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-5 md:px-10 bg-[#F0E7FF]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        
        {/* LEFT SIDE */}
        <div className="text-left max-w-md w-full font-poppins">
          <h2 className="text-[30px] font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-[16px] text-gray-600 mb-6">
            Interested working together? Let’s talk about your project and make something amazing!
          </p>

          <div className="space-y-3 text-[14px] text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-[#7755FF]" size={18} />
              <span className="text-[#7755FF] font-medium">dwiariyanti613@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#7755FF]" size={18} />
              <span className="text-[#7755FF] font-medium">+62 859-1859-56157</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/dwi.arynt/" target="_blank" rel="noreferrer">
                <Instagram size={18} className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://github.com/Dwiarynt" target="_blank" rel="noreferrer">
                <Github size={18} className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/in/dwiarynt/" target="_blank" rel="noreferrer">
                <Linkedin size={18} className="cursor-pointer hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="bg-white shadow-md rounded-2xl p-6 md:p-8 w-full md:w-[420px] font-poppins">
          <div className="mb-4 text-left">
            <label className="block text-[14px] font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-[14px] font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-[14px] font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#7755FF] to-[#E056FD] hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
