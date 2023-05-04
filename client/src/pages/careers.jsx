import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Careers() {
  return (
    <Navbar expand="lg" style={{ background: "green" }}>
      <Container>
        <Navbar.Brand style={{ width: "30%" }}>とある Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="foundation">Foundation</Nav.Link>
            <Nav.Link href="careers">Careers</Nav.Link>
            <Nav.Link href="volunteer">Volunteer</Nav.Link>
            <Nav.Link href="research">Research</Nav.Link>
            <Nav.Link href="learning">Learning</Nav.Link>
            <Nav.Link href="patientConnect">Patient Connect Portal</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Careers;
