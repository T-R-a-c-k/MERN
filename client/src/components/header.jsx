import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import "../css/header.module.css";
import Styles from "../css/header.module.css";
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
                <MDBIcon fab icon="facebook-f" className={Styles.headerLink} />
              </a>
              <a href="https://twitter.com/" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" className={Styles.headerLink} />
              </a>
              <a href="https://google.com/" className="me-4 text-reset">
                <MDBIcon fab icon="google" className={Styles.headerLink} />
              </a>
              <a href="https://instagram.com/" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" className={Styles.headerLink} />
              </a>
              <a href="https://linkedin.com/" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" className={Styles.headerLink} />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
            <Nav style={{ width: "100%", justifyContent: "flex-end" }}>
              <Nav.Link
                href="/"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="foundation"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Foundation
              </Nav.Link>
              <Nav.Link
                href="careers"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                href="volunteer"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Volunteer
              </Nav.Link>
              <Nav.Link
                href="research"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Research
              </Nav.Link>
              <Nav.Link
                href="learning"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
                Learning
              </Nav.Link>
              <Nav.Link
                href="patient_portal"
                style={navLinkStyle}
                className={Styles.headerLink}
              >
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
                <li>
                  <a href="/contact" style={{ color: "#445f5a" }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/covid" style={{ color: "#445f5a" }}>
                    Covid-19
                  </a>
                </li>
                <li>
                  <a href="/faq" style={{ color: "#445f5a" }}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/staff" style={{ color: "#445f5a" }}>
                    Staff
                  </a>
                </li>
              </ul>
            </Row>
            <Row>
              <ul>
                <li>
                  <h5>
                    <a href="preparing_care" style={{ color: "#445f5a" }}>
                      Preparing for care
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="care_programs" style={{ color: "#445f5a" }}>
                      Care programs
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="about" style={{ color: "#445f5a" }}>
                      About
                    </a>
                  </h5>
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
