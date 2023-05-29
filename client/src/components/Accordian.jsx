import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { Container } from "react-bootstrap";

const AccordianItems = (props) => {
  const { toDisplay, titles } = props;
  let currentItem = 0;
  let currentTitle = 0;
  return (
    <Container className="mt-5">
      <Accordion defaultActiveKey="0">
        {toDisplay.map((items) => {
          currentTitle++;
          return (
            <React.Fragment key={currentTitle}>
              <h1 style={{ margin: "2%" }}>{titles[currentTitle - 1]}</h1>
              {items.map((item) => {
                currentItem++;
                return (
                  <Accordion.Item eventKey={currentItem} key={currentItem}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </React.Fragment>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default AccordianItems;
