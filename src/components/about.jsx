import React from "react";
import Profil from "../assets/image/Profil.png";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
  src={Profil}
  alt="Profile"
  className="w-full max-w-sm h-80 md:h-96 rounded-lg shadow-md object-contain"
/>


          <div className="text-left">
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi! I’m <strong>Muhammad Ryan Ardiansyah</strong>, a passionate designer and frontend
              developer based in Indonesia. With a background in design and a love
              for coding, I specialize in creating websites that are not only
              stunning but also user-friendly.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">
                Web Development
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">
                Branding
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm">
                Motion Graphics
              </span>
            </div>

            <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
              Let’s Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
