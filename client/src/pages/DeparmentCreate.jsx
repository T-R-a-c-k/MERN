import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const DepartmentCreate = () => {
  const { id } = useParams();
  return <Container style={{ alignItems: "center" }}>Create Page</Container>;
};

export default DepartmentCreate;
