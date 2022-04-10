import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DWECarousel = ({ children }) => {
  return (
    <div className="my-5 col-span-full">
      <Carousel
        showIndicators={false}
        interval={2000}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default DWECarousel;
