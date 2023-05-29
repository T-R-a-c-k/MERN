import React from "react";
import Cards from "./Cards";

import {
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBRipple,
} from "mdb-react-ui-kit";
import Styles from "../css/NewsContainer.module.css";

import { Link } from "react-router-dom";

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
                  <Link to={"/"}>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </Link>
                </MDBRipple>
                <MDBRow className="mb-3">
                  <MDBCol col="6">
                    <Link to={"/"} className="text-info">
                      <MDBIcon fas icon="newspaper" className="me-1" />
                      News
                    </Link>
                  </MDBCol>
                </MDBRow>
                <Link to={"/"} className="text-dark">
                  <h5 className={Styles.newsLink}>Recent Events</h5>
                  <p>
                    With ever increasing demands, check out our improvements and
                    plans on how we plan to overcome these challenges.
                  </p>
                </Link>
                <hr />
                <Link to={"/research"} className="text-dark">
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
                </Link>
                <Link to={"/foundation"} className="text-dark">
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
                </Link>
                <Link to={"/careers"} className="text-dark">
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
                </Link>
                <Link to={"/covid"} className="text-dark">
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
                </Link>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <Cards cards={cards} />
      </MDBRow>
    </MDBContainer>
  );
};

export default NewsContainer;
