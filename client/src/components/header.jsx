import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/header.module.css";

const imageHeight = "8vh";
const noPadding = "0px";

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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="foundation">Foundation</Nav.Link>
              <Nav.Link href="careers">Careers</Nav.Link>
              <Nav.Link href="volunteer">Volunteer</Nav.Link>
              <Nav.Link href="research">Research</Nav.Link>
              <Nav.Link href="learning">Learning</Nav.Link>
              <Nav.Link href="patient_portal">Patient Portal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <a href="/" alt="Home Button">
              <img
                src="https://www.nicepng.com/png/detail/87-874647_red-cross-hospital-logo-hospital-logo-red-cross.png"
                style={{
                  height: imageHeight,
                  width: "12%",
                  margin: "1%",
                }}
                alt="Hospital Logo"
              ></img>
            </a>
          </Col>
          <Col>
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
