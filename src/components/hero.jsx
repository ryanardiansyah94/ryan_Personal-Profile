import React from "react";
import Profil from "../assets/image/Profil.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen px-8 md:px-20 py-24 md:py-32 relative overflow-hidden">
      {/* Text Section */}
      <div className="max-w-xl md:mr-12">
        <p className="text-sm text-purple-600 font-semibold mb-2">Hello, I’m</p>
        <h1 className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
    Muhammad Ryan Ardiansyah
  </h1>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Creative Designer& <br /> Frontend Developer
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Passionate in creating beautiful and functional digital experiences.
          I love blending creativity with technology to make impactful solutions
          for users and brands.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-7 py-3 rounded-full shadow-md hover:opacity-90 transition font-medium">
            See My Work
          </button>
          <button className="border border-purple-400 text-purple-600 px-7 py-3 rounded-full hover:bg-purple-50 transition font-medium">
            Contact Me
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-14 md:mt-0">
        {/* Bingkai efek blur di belakang */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-50"></div>

        {/* Bingkai luar putih */}
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-[6px] border-white shadow-2xl overflow-hidden">
          <img
      src={Profil}
      alt="Profile"
       className="w-full h-full object-contain rounded-full scale-105 bg-gradient-to-r from-purple-200 to-pink-200"
      />

        </div>
      </div>
    </section>
  );
};

export default Hero;
