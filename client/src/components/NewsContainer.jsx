import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import {
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBRipple,
} from "mdb-react-ui-kit";

const NewsContainer = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBContainer className="py-5">
            <MDBCard className="px-3 pt-3" style={{ maxWidth: "32rem" }}>
              <div>
                <MDBRipple
                  className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                    className="img-fluid"
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
                  <h5>Recent Events</h5>
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
                        <strong>New Technological Discoveries</strong>
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
                        <strong>Brand New Department Openings</strong>
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
                        <strong>New Career Opportunities</strong>
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
                        <strong>Covid Policies and Changes</strong>
                      </p>
                      <p>
                        <u> 03.16.2023</u>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
              </div>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBCol className="py-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NewsContainer;
