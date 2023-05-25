import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const PatientUpdate = () => {
  const DEFAULT_FORM_OBJECT = {
    firstName: "",
    lastName: "",
    birthDate: "",
    medicalNumber: 0,
    email: "",
    visitations: [],
  };
  const navigate = useNavigate();
  const { email } = useParams();
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [err, setErr] = useState("");
  const { tokenInstance } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/patient/${email}/update`,
        requestHeaders(tokenInstance)
      );
      values.data.birthDate = values.data.birthDate.substring(0, 10);
      setForm(values.data);
    };
    getData();
  }, [email, tokenInstance]);

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
    const birthDateISO = new Date(form.birthDate).toISOString();
    setForm({ ...form, birthDate: birthDateISO });
    await axios.put(
      `http://localhost:8080/patient/${email}/update`,
      form,
      requestHeaders(tokenInstance)
    );
    navigate("/admin/patient");
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
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={"First Name"}
            value={form.firstName}
            onChange={updateFormValue("firstName")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={updateFormValue("lastName")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            value={form.birthDate}
            onChange={updateFormValue("birthDate")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMedicalNumber">
          <Form.Label>Medical Number</Form.Label>
          <Form.Control
            type="number"
            value={form.medicalNumber}
            onChange={updateFormValue("medicalNumber")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={updateFormValue("email")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PatientUpdate;
