import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Styles from "../css/NewsContainer.module.css";

import { MDBCol } from "mdb-react-ui-kit";
import uniqid from "uniqid";

const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((cardArray, arrIndex) => {
        return (
          <MDBCol key={uniqid()} className="py-5">
            {cardArray.map((card, index) => {
              return (
                <div
                  key={uniqid()}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    className={Styles.cardLink}
                    key={uniqid()}
                    style={{
                      width: "18rem",
                      marginTop: "5%",
                      backgroundColor: "#445f5a",
                    }}
                  >
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>
                        {card.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Link to={card.link} style={{ color: "white" }}>
                        {card.linkTitle}
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </MDBCol>
        );
      })}
    </>
  );
};

export default Cards;
