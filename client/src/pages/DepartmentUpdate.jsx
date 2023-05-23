import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const DepartmentUpdate = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/department/${id}/update`
      );
      setData(values.data);
    };
    getData();
  }, []);
  return (
    <Container fluid style={{ textAlign: "center", margin: "3%" }}>
      <Row>
        <h1>Name: {data.name}</h1>
      </Row>
      <Row>
        <h1>Location: {data.location}</h1>
      </Row>
      <Row>
        <h1>Budget: {data.budget}</h1>
      </Row>
    </Container>
  );
};

export default DepartmentUpdate;
