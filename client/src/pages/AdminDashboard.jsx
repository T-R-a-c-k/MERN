import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { setUserInstance, setTokenInstance } = useContext(UserContext);
  const logoutHandler = () => {
    setUserInstance(null);
    setTokenInstance(null);
    navigate("/");
  };
  const { userInstance } = useContext(UserContext);
  return (
    <Container>
      <Row>
        <Link to={"departments"} style={{ color: "white" }}>
          Departments
        </Link>

        <Link to={"patients"} style={{ color: "white" }}>
          Patients
        </Link>
        <Link to={"precsriptions"} style={{ color: "white" }}>
          Precsriptions
        </Link>
        <Link to={"staff"} style={{ color: "white" }}>
          Staff
        </Link>
        <Link to={"visitations"} style={{ color: "white" }}>
          Visitations
        </Link>
      </Row>

      <Button style={{ margin: "1%" }} onClick={() => logoutHandler()}>
        Log Out
      </Button>
    </Container>
  );
};

export default AdminDashboard;
