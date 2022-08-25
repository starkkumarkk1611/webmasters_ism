import React from "react";
import NavBar from "../componenets/headers/NavBar";
import Footer from "../componenets/footer/Footer";
import Gallary from "../componenets/Gallary/Gallery";
import Welcome from "../componenets/welcome/Welcome";
import Bureaus from "../componenets/bureaus";
import Signup from "./signup";

import Hero from "../componenets/hero/Hero";
import MainMenu from "../utils/CONSTANTS/NavMenuData";
import Eminent from "../componenets/Eminent/Eminent";
import Initiatives from "./initiatives/Initiatives";
import Leadership from "./leadership/Leadership";
import Bureas from "./bureas/Bureas";
import About from "./aboutUs/History";
import Initiative from "../componenets/Initiative/Initiative";
// import MultipleCarousel from "../componenets/MultipleCarousel/MultipleCarousel";
const Home = () => {

  return (
    <div>
      <NavBar navItems={MainMenu} />
      <Hero />
      <Welcome />

      <Gallary />
      <Footer />
     {/* <Signup />   */}
    </div>
  );
};

export default Home;
