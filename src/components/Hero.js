import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Manage Your Finances and Work with Ease
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Track your Projects, set financial goals, and analyze your spending patterns in a secure and user-friendly environment.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
