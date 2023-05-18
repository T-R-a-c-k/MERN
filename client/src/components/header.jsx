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
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

function Header() {
  function isAdmin() {
    return userInstance.role === "admin" ? (
      <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
        <Link to={"admin"} style={{ color: "white" }}>
          Admin Dashboard
        </Link>
      </Nav.Link>
    ) : (
      <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
        <Link to={"/my_portal"} style={{ color: "white" }}>
          {"Welcome, " + userInstance?.firstName}
        </Link>
      </Nav.Link>
    );
  }

  const { userInstance } = useContext(UserContext);
  return (
    <>
      <Navbar expand="lg" style={{ background: "#445f5a", padding: noPadding }}>
        <Container fluid>
          <Navbar.Brand style={{ width: "20%", marginLeft: "5%" }}>
            <div>
              <Link to={"https://facebook.com/"} className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" className={Styles.headerLink} />
              </Link>
              <Link to={"https://twitter.com/"} className="me-4 text-reset">
                <MDBIcon fab icon="twitter" className={Styles.headerLink} />
              </Link>
              <Link to={"https://google.com/"} className="me-4 text-reset">
                <MDBIcon fab icon="google" className={Styles.headerLink} />
              </Link>
              <Link to={"https://instagram.com/"} className="me-4 text-reset">
                <MDBIcon fab icon="instagram" className={Styles.headerLink} />
              </Link>
              <Link to={"https://linkedin.com/"} className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" className={Styles.headerLink} />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
            <Nav style={{ width: "100%", justifyContent: "flex-end" }}>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"/"} style={{ color: "white" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"foundation"} style={{ color: "white" }}>
                  Foundation
                </Link>
              </Nav.Link>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"careers"} style={{ color: "white" }}>
                  Careers
                </Link>
              </Nav.Link>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"volunteer"} style={{ color: "white" }}>
                  Volunteer
                </Link>
              </Nav.Link>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"research"} style={{ color: "white" }}>
                  Research
                </Link>
              </Nav.Link>
              <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                <Link to={"learning"} style={{ color: "white" }}>
                  Learning
                </Link>
              </Nav.Link>
              {userInstance === null ? (
                <Nav.Link style={navLinkStyle} className={Styles.headerLink}>
                  <Link to={"/staff_portal"} style={{ color: "white" }}>
                    Staff Portal
                  </Link>
                </Nav.Link>
              ) : (
                isAdmin()
              )}
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
            <Link to={"/"} alt="Home Button">
              <img
                src="https://www.freeiconspng.com/uploads/ambulance-cross-hospital-icon-11.png"
                style={{
                  height: imageHeight,
                  width: "100%",
                  margin: "1%",
                }}
                alt="Hospital Logo"
              ></img>
            </Link>
          </Col>
          <Col>
            <Row>
              <ul className="hide">
                <li>
                  <Link to={"/contact"} style={{ color: "#445f5a" }}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/covid"} style={{ color: "#445f5a" }}>
                    Covid-19
                  </Link>
                </li>
                <li>
                  <Link to={"/faq"} style={{ color: "#445f5a" }}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to={"/staff"} style={{ color: "#445f5a" }}>
                    Staff
                  </Link>
                </li>
              </ul>
            </Row>
            <Row>
              <ul>
                <li>
                  <h5>
                    <Link to={"/preparing_care"} style={{ color: "#445f5a" }}>
                      Preparing for care
                    </Link>
                  </h5>
                </li>
                <li>
                  <h5>
                    <Link to={"/care_programs"} style={{ color: "#445f5a" }}>
                      Care programs
                    </Link>
                  </h5>
                </li>
                <li>
                  <h5>
                    <Link to={"/about"} style={{ color: "#445f5a" }}>
                      About
                    </Link>
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
