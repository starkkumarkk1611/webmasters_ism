import React, { useState } from "react";
import herocarusel from "../../assets/herocarusel.png";
import herocarusel1 from "../../assets/herocarusel1.jpg";
import herocarusel2 from "../../assets/herocarusel2.png";
import Carousel from "react-bootstrap/Carousel";

const carouselItem = [
  {
    imgscr: herocarusel1,
    title: "First slide label",
    desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    imgscr: herocarusel,
    title: "2nd  slide label",
    desc: "2nd ulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    imgscr: herocarusel2,
    title: "third slide label",
    desc: "vitae elit libero, a pharetra augue mollis interdum.",
  },
];
const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItem.map(({ imgscr, title, desc }, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imgscr}
            alt="First slide"
            style={{ maxHeight: "60vh" }}
          />
          {/* <Carousel.Caption>
            <h3>{title}</h3>
            <p>{desc}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
