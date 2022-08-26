import React from "react";
import NavBar from "../componenets/headers/NavBar";
import Footer from "../componenets/footer/Footer";
import Gallary from "../componenets/Gallary/Gallery";
import Welcome from "../componenets/welcome/Welcome";
import Hero from "../componenets/hero/Hero";
import MainMenu from "../utils/CONSTANTS/NavMenuData";
import Eminent from "../componenets/Eminent/Eminent";
import Initiatives from "./initiatives/Initiatives";
import Leadership from "./leadership/Leadership";
import Bureas from "./bureas/Bureas";
import About from "./aboutUs/History";
import Initiative from "../componenets/Initiative/Initiative";
import Search from "./Search/Search";
const Home = () => {
  return (
    <div>
    {/* <Analytics /> */}
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
