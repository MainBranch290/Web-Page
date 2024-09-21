import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";


const Webpage = () => {
    return (
      <div className="App">
        <Navbar />
        <HeroSection />
        <ProductGrid />
        <Footer />
      </div>
    );
  }
  
  export default Webpage;