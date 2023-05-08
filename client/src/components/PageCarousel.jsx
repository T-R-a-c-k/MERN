import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  halfCarouselItem,
  imageClass,
  imageHeight,
} from "../formatting/carouselFormat";

//TODO: added ability to change style / classname / height if specificed via props

const PageCarousel = (props) => {
  const { toDisplay } = props;
  return (
    <Carousel fade keyboard={true} indicators={true}>
      {toDisplay.map((item, index) => {
        return (
          <Carousel.Item style={halfCarouselItem}>
            <img
              className={imageClass}
              style={{ height: imageHeight }}
              key={index}
              src={item.src}
              alt={item.alt}
            />
            <div>{item.text}</div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PageCarousel;
