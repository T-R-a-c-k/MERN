import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/header.module.css";

const imageHeight = "15vh";
const noPadding = "0px";
const navBarMargin = "5%";

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ background: "#445f5a", padding: noPadding }}>
        <Container fluid>
          <Navbar.Brand style={{ width: "20%", marginLeft: "5%" }}>
            <div>
              <a href="https://facebook.com/" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://twitter.com/" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="https://google.com/" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="https://instagram.com/" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="https://linkedin.com/" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "center" }}
          >
            <Nav>
              <Nav.Link
                href="/"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="foundation"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Foundation
              </Nav.Link>
              <Nav.Link
                href="careers"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                href="volunteer"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Volunteer
              </Nav.Link>
              <Nav.Link
                href="research"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Research
              </Nav.Link>
              <Nav.Link
                href="learning"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Learning
              </Nav.Link>
              <Nav.Link
                href="patient_portal"
                style={{ marginLeft: navBarMargin, whiteSpace: "nowrap" }}
              >
                Patient Portal
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={6}>
            <a href="/" alt="Home Button">
              <img
                src="https://www.nicepng.com/png/detail/87-874647_red-cross-hospital-logo-hospital-logo-red-cross.png"
                style={{
                  height: imageHeight,
                  width: "50%",
                  margin: "1%",
                }}
                alt="Hospital Logo"
              ></img>
            </a>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Row>
              <ul>
                <li>Contact</li>
                <li>Covid-19</li>
                <li>FAQs</li>
                <li>Staff</li>
              </ul>
            </Row>
            <Row>
              <ul>
                <li>Preparing for care</li>
                <li>Care Programs</li>
                <li>News & Media</li>
                <li>About</li>
                <li>Emergency</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Header;
