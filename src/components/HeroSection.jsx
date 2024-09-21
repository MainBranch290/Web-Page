import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold">Elevate Your Style</h1>
        <p className="mt-4 text-lg">Discover the latest trends in fashion</p>
        <button className="mt-6 px-6 py-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition">Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
