import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/header.module.css";
import {
  imageHeight,
  noPadding,
  navLinkStyle,
} from "../formatting/headerFormat";

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ background: "#445f5a", padding: noPadding }}>
        <Container fluid>
          <Navbar.Brand style={{ width: "20%", marginLeft: "5%" }}>
            <div>
              <a href="https://facebook.com/" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" style={{ color: "white" }} />
              </a>
              <a href="https://twitter.com/" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" style={{ color: "white" }} />
              </a>
              <a href="https://google.com/" className="me-4 text-reset">
                <MDBIcon fab icon="google" style={{ color: "white" }} />
              </a>
              <a href="https://instagram.com/" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" style={{ color: "white" }} />
              </a>
              <a href="https://linkedin.com/" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" style={{ color: "white" }} />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "center" }}
          >
            <Nav>
              <Nav.Link href="/" style={navLinkStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="foundation" style={navLinkStyle}>
                Foundation
              </Nav.Link>
              <Nav.Link href="careers" style={navLinkStyle}>
                Careers
              </Nav.Link>
              <Nav.Link href="volunteer" style={navLinkStyle}>
                Volunteer
              </Nav.Link>
              <Nav.Link href="research" style={navLinkStyle}>
                Research
              </Nav.Link>
              <Nav.Link href="learning" style={navLinkStyle}>
                Learning
              </Nav.Link>
              <Nav.Link href="patient_portal" style={navLinkStyle}>
                Patient Portal
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "Center",
            }}
          >
            <a href="/" alt="Home Button">
              <img
                src="https://www.freeiconspng.com/uploads/ambulance-cross-hospital-icon-11.png"
                style={{
                  height: imageHeight,
                  width: "100%",
                  margin: "1%",
                }}
                alt="Hospital Logo"
              ></img>
            </a>
          </Col>
          <Col>
            <Row>
              <ul className="hide">
                <li>Contact</li>
                <li>Covid-19</li>
                <li>FAQs</li>
                <li>Staff</li>
              </ul>
            </Row>
            <Row>
              <ul>
                <li>
                  <h5>Preparing for care</h5>
                </li>
                <li>
                  <h5>Care Programs</h5>
                </li>
                <li>
                  <h5>News & Media</h5>
                </li>
                <li>
                  <h5>About</h5>
                </li>
                <li>
                  <h5>Emergency</h5>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Header;
