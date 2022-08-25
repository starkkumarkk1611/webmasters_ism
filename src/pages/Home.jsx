import React from "react";
import NavBar from "../componenets/headers/NavBar";
import Footer from "../componenets/footer/Footer";
import Gallary from "../componenets/Gallary/Gallery";
import Welcome from "../componenets/welcome/Welcome";
import Hero from "../componenets/hero/Hero";
import MainMenu from "../utils/CONSTANTS/NavMenuData";
const Home = () => {
  // const barbara = {
  //   name: "Barbara Palvin",
  //   profileInfo: "Barbara Palvin (born 8 October 1993) is a Hungarian model. She was named as the 2016 Sports Illustrated Swimsuit Issue Rookie of the Year. She also appeared on Love magazine's 2016 advent video recreating Sharon Stone's iconic Basic Instinct scene.",
  //   img: "https://pbs.twimg.com/profile_images/907408110167486465/WVIDWzEW_400x400.jpg"
  // };
  return (
    <div>
      <NavBar navItems={MainMenu} />
      <Hero />
      <Welcome />

      <Gallary />
      <Footer />
    </div>
  );
};

export default Home;
