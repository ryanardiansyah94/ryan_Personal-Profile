import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-gray-600 mb-6">
            Interested in working together? Let’s talk about your project and make something amazing!
          </p>
          <p className="text-purple-600 font-medium mb-2">ryanardi@email.com</p>
          <p className="text-gray-500 mb-4">+62 896-1254-8511</p>
        </div>

        <form className="bg-white p-6 rounded-xl shadow-md">
          <input type="text" placeholder="Your Name" className="w-full border p-2 mb-3 rounded-md" />
          <input type="email" placeholder="you@email.com" className="w-full border p-2 mb-3 rounded-md" />
          <textarea placeholder="Type your message..." className="w-full border p-2 mb-3 rounded-md h-24" />
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
      <p className="text-center text-gray-400 text-sm mt-10">
        © 2025 RyanArdiansyah. Copyright2025 in Indonesia.
      </p>
    </section>
  );
};

export default Contact;
