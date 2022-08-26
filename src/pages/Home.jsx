import React from "react";
import NavBar from "../componenets/headers/NavBar";
import Footer from "../componenets/footer/Footer";
import Welcome from "../componenets/welcome/Welcome";
import Hero from "../componenets/hero/Hero";
import MainMenu from "../utils/CONSTANTS/NavMenuData";
import Eminent from "../componenets/Eminent/Eminent";
import Initiative from "../componenets/Initiative/Initiative";
// import MultipleCarousel from "../componenets/MultipleCarousel/MultipleCarousel";
const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar navItems={MainMenu} />
      <Hero />
      <Welcome />
      <Eminent />
      <Initiative />
      <Footer />
    </div>
  );
};

export default Home;
