import "./home.css"
import React from "react";
import Nav from "../../components/Navbar/navbar";
import CarouselItem from "../../components/Carousel/carousel";
export default function Home() {
  return (
    <div className="teste">
      <Nav/>
      <div className="carousel">
        <CarouselItem/>
      </div>
    </div>
  )
}