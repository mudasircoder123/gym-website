import React from "react";
import HeroSection from "./Hero";
import './main.css';
import Nav from "./Nav";
import Footer from "./Footer";
import Program from "./Program";
import About from "./About";
import Contact from "./Cntact";
import GymDetailsPage from "./Training";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const Main = () => {

  return (
<>
<BrowserRouter>
        <Nav />
        <Routes>
          {/* Use the element prop to render components */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/trainingCard" element={<GymDetailsPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Main;
