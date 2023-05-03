import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";

const Home = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const { data: patientsList } = await axios.get(
        "http://localhost:8080/sign_up"
      );
      setPatients(patientsList);
    };
    fetchPatients();
  }, []);
  return (
    <Container>
      <div>Home</div>
      <div>{patients.length}</div>
      <Row>
        <Col>
          {patients.map((patient) => {
            return <div key={patient._id}>{patient}</div>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
