import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const linkStyle = {
  color: "white",
  margin: "3%",
  width: "30%",
  background: "blue",
  borderRadius: "5px",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { setUserInstance, setTokenInstance } = useContext(UserContext);
  const logoutHandler = () => {
    setUserInstance(null);
    setTokenInstance(null);
    navigate("/");
  };
  return (
    <Container style={{ alignItems: "center" }}>
      <Row style={{ textAlign: "center" }}>
        <Link to={"department"} style={linkStyle}>
          Departments
        </Link>

        <Link to={"patient"} style={linkStyle}>
          Patients
        </Link>
        <Link to={"prescription"} style={linkStyle}>
          Prescription
        </Link>
        <Link to={"staff"} style={linkStyle}>
          Staff
        </Link>
        <Link to={"visitation"} style={linkStyle}>
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
