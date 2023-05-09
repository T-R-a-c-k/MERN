import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Styles from "../css/PageCarousel.module.css";
import {
  halfCarouselItem,
  imageClass,
  imageHeight,
} from "../formatting/carouselFormat";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

//TODO: added ability to change style / classname / height if specificed via props

const PageCarousel = (props) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This link does not redirect
    </Tooltip>
  );
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
            <div
              className={Styles.carouselRight}
              style={{ backgroundColor: item.color }}
            >
              <h1 className={Styles.carouselRight_h1}>{item.text}</h1>
              <p className={Styles.carouselRight_p}>{item.paragraph}</p>
              <a
                href=""
                className={Styles.carouselRight_link}
                style={{ color: "white" }}
              >
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 100, hide: 0 }}
                  overlay={renderTooltip}
                >
                  <div sty>A link to the information</div>
                </OverlayTrigger>
              </a>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PageCarousel;
