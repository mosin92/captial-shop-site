import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import hero_img_1 from '../../../src/Images/hero1.webp'
import hero_img_2 from '../../../src/Images/hero_2.webp'
function HeroSection() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero_img_1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero_img_2}
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
    </>
  )
}

export default HeroSection
