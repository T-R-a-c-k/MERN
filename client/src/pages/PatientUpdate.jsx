import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { config } from "../config";

const PatientUpdate = ({ method }) => {
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
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `${config.BASE_URL}/patient/${email}/update`,
        requestHeaders(tokenInstance)
      );
      values.data.birthDate = values.data.birthDate.substring(0, 10);
      setForm(values.data);
    };
    if (email) {
      getData();
    }
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
    const submitForm = e.currentTarget;
    if (submitForm.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const birthDateISO = new Date(form.birthDate).toISOString();

      setForm({ ...form, birthDate: birthDateISO });
      if (method === "update") {
        await axios.put(
          `${config.BASE_URL}/patient/${email}/update`,
          form,
          requestHeaders(tokenInstance)
        );
      }
      if (method === "create") {
        await axios.post(
          `${config.BASE_URL + config.PATIENT_CREATE}`,
          form,
          requestHeaders(tokenInstance)
        );
      }
      navigate("/admin/patient");
    }

    setValidated(true);
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
        noValidate
        validated={validated}
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
            required
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A first name is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={updateFormValue("lastName")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A last name is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            value={form.birthDate}
            onChange={updateFormValue("birthDate")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A birth date is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMedicalNumber">
          <Form.Label>Medical Number</Form.Label>
          <Form.Control
            type="number"
            value={form.medicalNumber}
            onChange={updateFormValue("medicalNumber")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A medical number is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={updateFormValue("email")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            An email is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PatientUpdate;
