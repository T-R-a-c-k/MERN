import React from "react";
import Card from "react-bootstrap/Card";

import {
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBRipple,
} from "mdb-react-ui-kit";
import Styles from "../css/NewsContainer.module.css";

const createCard = (title, linkTitle, link) => {
  return {
    title: title ? title : "some card title",
    linkTitle: linkTitle ? linkTitle : "some link title",
    link: link ? link : "",
  };
};

const cards = [
  [
    createCard("Foundation", "Vist Foundation page", "/foundation"),
    createCard("Volunteer", "Read more", "/volunteer"),
    createCard(
      "Covid Information",
      "For more information on Covid-19, visit here",
      "/covid"
    ),
  ],
  [
    createCard("Care Programs", "Read more", "/care_programs"),
    createCard("About", "Read more", "/about"),
    createCard("Staff", "To learn more about who we are", "/staff"),
    createCard("Research", "Vist Research Page", "/research"),
  ],
];

const Cards = () => {
  return (
    <>
      {cards.map((cardArray, arrIndex) => {
        return (
          <MDBCol key={arrIndex} className="py-5">
            {cardArray.map((card, index) => {
              return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card
                    className={Styles.cardLink}
                    key={index}
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
                      <Card.Link href={card.link} style={{ color: "white" }}>
                        {card.linkTitle}
                      </Card.Link>
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

const NewsContainer = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBContainer className="py-5">
            <MDBCard className="px-3 pt-3" style={{ maxWidth: "36rem" }}>
              <MDBCol>
                <MDBRipple
                  className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                    className="img-fluid"
                    alt="First"
                  />
                  <a href="/">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBRow className="mb-3">
                  <MDBCol col="6">
                    <a href="/" className="text-info">
                      <MDBIcon fas icon="newspaper" className="me-1" />
                      News
                    </a>
                  </MDBCol>
                </MDBRow>
                <a href="/" className="text-dark">
                  <h5 className={Styles.newsLink}>Recent Events</h5>
                  <p>
                    With ever increasing demands, check out our improvements and
                    plans on how we plan to overcome these challenges.
                  </p>
                </a>
                <hr />
                <a href="/research" className="text-dark">
                  <MDBRow className="mb-4 border-bottom pb-2">
                    <MDBCol size="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                        className="img-fluid shadow-1-strong rounded"
                        alt="Hollywood Sign on The Hill"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <p className="mb-2">
                        <strong className={Styles.newsLink}>
                          New Technological Discoveries
                        </strong>
                      </p>
                      <p>
                        <u> 08.05.2023</u>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <a href="/foundation" className="text-dark">
                  <MDBRow className="mb-4 border-bottom pb-2">
                    <MDBCol size="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                        className="img-fluid shadow-1-strong rounded"
                        alt="Hollywood Sign on The Hill"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <p className="mb-2">
                        <strong className={Styles.newsLink}>
                          Brand New Department Openings
                        </strong>
                      </p>
                      <p>
                        <u> 23.04.2023</u>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <a href="/careers" className="text-dark">
                  <MDBRow className="mb-4 border-bottom pb-2">
                    <MDBCol size="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                        className="img-fluid shadow-1-strong rounded"
                        alt="Hollywood Sign on The Hill"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <p className="mb-2">
                        <strong className={Styles.newsLink}>
                          New Career Opportunities
                        </strong>
                      </p>
                      <p>
                        <u> 06.04.2023</u>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <a href="/covid" className="text-dark">
                  <MDBRow className="mb-4 border-bottom pb-2">
                    <MDBCol size="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                        className="img-fluid shadow-1-strong rounded"
                        alt="Hollywood Sign on The Hill"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <p className="mb-2">
                        <strong className={Styles.newsLink}>
                          Covid Policies and Changes
                        </strong>
                      </p>
                      <p>
                        <u> 03.16.2023</u>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <Cards />
      </MDBRow>
    </MDBContainer>
  );
};

export default NewsContainer;
