import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const colStyle = { textAlign: "center" };
const linkStyle = { color: "white" };

function SelectedItemDelete() {
  const { id, email } = useParams();
  const { tokenInstance } = useContext(UserContext);
  const navigate = useNavigate();

  const removeOption = async (tokenInstance) => {
    const path = window.location.pathname.split("/");
    const collection = path[2];

    const values = await axios.delete(
      `http://localhost:8080/${collection}/${id || email}/delete`,
      requestHeaders(tokenInstance)
    );
    navigate(`/admin/${collection}`);
  };
  return (
    <Container style={{ justifyItems: "center" }}>
      <Row>
        <Col>
          <h1 style={colStyle}>
            Are you sure you want to delete:<br></br>
            {id || email}?
          </h1>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Button onClick={() => removeOption(tokenInstance)}>Yes</Button>
        </Col>
        <Col>
          <Button>
            <Link to="/admin" style={linkStyle}>
              No
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default SelectedItemDelete;
