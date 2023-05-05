import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBIcon } from "mdb-react-ui-kit";

const imageHeight = "10vh";
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
              <a href="https://github.com/" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
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
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" style={{ background: "white", padding: noPadding }}>
        <Container>
          <img
            src="https://www.nicepng.com/png/detail/87-874647_red-cross-hospital-logo-hospital-logo-red-cross.png"
            style={{ height: imageHeight, width: "" }}
            alt="Hospital Logo"
          ></img>
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
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
