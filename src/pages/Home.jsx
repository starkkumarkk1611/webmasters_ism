import React from "react";
import NavBar from "../componenets/headers/NavBar";
import Footer from "../componenets/footer/Footer";
import Gallary from "../componenets/Gallary/Gallery";
import Welcome from "../componenets/welcome/Welcome";
import Bureaus from "../componenets/bureaus";
import Signup from "./signup";

import Hero from "../componenets/hero/Hero";
import MainMenu from "../utils/CONSTANTS/NavMenuData";
const Home = () => {

  return (
    <div>
      <NavBar navItems={MainMenu} />
      <Hero />
      {/* <Welcome /> */}
      {/* <Bureaus />  */}

      {/* <Gallary /> */}
      <Footer />
     {/* <Signup />   */}
    </div>
  );
};

export default Home;
