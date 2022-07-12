import "./home.css"
import React from "react";
import Nav from "../../components/Navbar/navbar";
import CarouselItem from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
export default function Home() {
  return (
    <div className="home">
      <div className="nav">
        <Nav/>
      </div>
      <div className="carousel">
        <CarouselItem/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}