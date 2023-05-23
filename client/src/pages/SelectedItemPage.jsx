import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const linkStyle = { color: "white" };
const colStyle = { textAlign: "center" };

function SelectedItem() {
  const { id, email } = useParams();
  return (
    <Container style={{ justifyItems: "center" }}>
      <Row>
        <h1 style={colStyle}>{id || email}</h1>
      </Row>
      <Row>
        <Col style={colStyle}>
          <Button>
            <Link to="update" style={linkStyle}>
              Update
            </Link>
          </Button>
        </Col>
        <Col style={colStyle}>
          <Button>
            <Link to="delete" style={linkStyle}>
              Delete
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default SelectedItem;
