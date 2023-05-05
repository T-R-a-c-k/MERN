import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  halfCarouselItem,
  imageClass,
  imageHeight,
} from "../formatting/carouselFormat";

import {
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBRipple,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <Carousel fade keyboard={true} indicators={true}>
        <Carousel.Item style={halfCarouselItem}>
          <img
            className={imageClass}
            style={{ height: imageHeight }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187e804cfd4%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187e804cfd4%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="First slide"
          />
          <div>Some text about the image</div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={halfCarouselItem}>
          <img
            className={imageClass}
            style={{ height: imageHeight }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187e804cfd7%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187e804cfd7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Second slide"
          />
          <div>Some text about the image</div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={halfCarouselItem}>
          <img
            className={imageClass}
            style={{ height: imageHeight }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187e804cfd8%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187e804cfd8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22278.3203125%22%20y%3D%22221.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Third slide"
          />
          <div>Some text about the image</div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div>Some text about the image</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <form
        className="form-inline mt-5 mb-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
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
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBRow className="mb-3">
                    <MDBCol col="6">
                      <a href="" className="text-info">
                        <MDBIcon fas icon="plane" className="me-1" />
                        Travels
                      </a>
                    </MDBCol>
                    <MDBCol col="6" className="text-end">
                      <u> 15.07.2020</u>
                    </MDBCol>
                  </MDBRow>
                  <a href="#!" className="text-dark">
                    <h5>This is title of the news</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, iste aliquid. Sed id nihil magni, sint vero
                      provident esse numquam perferendis ducimus dicta adipisci
                      iusto nam temporibus modi animi laboriosam?
                    </p>
                  </a>
                  <hr />
                  <a href="#!" className="text-dark">
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
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                  <a href="#!" className="text-dark">
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
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                  <a href="#!" className="text-dark">
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
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                  <a href="#!" className="text-dark">
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
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
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
    </>
  );
};
export default Home;
