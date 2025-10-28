import React from "react";
import portofolio1 from "../assets/image/portofolio1.png";
import portofolio2 from "../assets/image/portofolio2.png";
import portofolio3 from "../assets/image/portofolio3.png";

const Portfolio = () => {
  const projects = [
    { title: "Dashboard Web App", desc: "UI/UX, Frontend", img: portofolio1 },
    { title: "Portofolio  website", desc: "Design, Branding", img: portofolio2 },
    { title: "Mobile App Landing", desc: "Animation, Branding", img: portofolio3 },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Portfolio</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-bold text-gray-800">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition"
        onClick={() => window.open("https://www.figma.com/design/PHQ1Yd66WsYLIwaxkkuZbc/portofolio-UI?node-id=0-1&t=L0NjooHXiBwvKbxc-1/", "_blank")}
      >
        More on Portofolio
      </button>
    </section>
  );
};

export default Portfolio;
