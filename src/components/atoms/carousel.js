import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DWECarousel = ({ children }) => {
  return (
    <div className="my-5 col-span-full md:col-span-2 md:col-start-3">
      <Carousel
        showIndicators={false}
        interval={5000}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default DWECarousel;
