import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyPortal = () => {
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
        <h1>{userInstance?.firstName}'s Details</h1>
        <Table striped bordered hover size="sm" style={{ margin: "1%" }}>
          <tbody>
            {Object.keys(userInstance).map((key, index) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{userInstance[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>

      <Button style={{ margin: "1%" }} onClick={() => logoutHandler()}>
        Log Out
      </Button>
    </Container>
  );
};

export default MyPortal;
