import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const DWECarousel = ({ children }) => {
  return (
    <Carousel
      showIndicators={false}
      interval={2000}
      showArrows={false}
      showStatus={false}
      autoPlay={true}
    >
      {children}
    </Carousel>
  )
}

export default DWECarousel
