import React from "react";

const Skills = () => {
  const skills = [
    { title: "UI/UX Design", desc: "Figma, Adobe XD, Sketch", color: "bg-pink-100" },
    { title: "Frontend Dev", desc: "React, Vue, Tailwind", color: "bg-blue-100" },
    { title: "Branding", desc: "Logo, Identity, Print", color: "bg-yellow-100" },
    { title: "Motion Graphic", desc: "After Effects, Lottie", color: "bg-purple-100" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">My Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {skills.map((s, i) => (
          <div key={i} className={`${s.color} p-6 rounded-xl shadow hover:shadow-lg transition`}>
            <h3 className="text-lg font-bold text-gray-700 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
