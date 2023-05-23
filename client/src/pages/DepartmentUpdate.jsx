import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const DepartmentUpdate = () => {
  const DEFAULT_FORM_OBJECT = {
    name: "",
    location: "",
    budget: 0,
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [err, setErr] = useState("");

  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/department/${id}/update`
      );
      setForm(values.data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErr("");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [err]);

  const updateFormValue = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/department/${id}/update`, form);
    navigate("/admin/department");
  };

  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        width: "50%",
        marginTop: "2%",
        marginBottom: "2%",
      }}
    >
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Department Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={"Name"}
            value={form.name}
            onChange={updateFormValue("name")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="location"
            value={form.location}
            onChange={updateFormValue("location")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBudget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={form.budget}
            onChange={updateFormValue("budget")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DepartmentUpdate;