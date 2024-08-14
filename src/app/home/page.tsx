import React from "react";

import HomePage from "@/Layout/Home";
import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HomePage /> 
      <NewsLetter /> 
      <Footer />
    </div>
  );
}

export default Home;
