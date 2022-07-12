import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselItem() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quilombolas</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Indígenas</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Monumentos</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sitios Aquerológicos</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/5.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Lugares</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/6.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Patrimônio imaterial</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}