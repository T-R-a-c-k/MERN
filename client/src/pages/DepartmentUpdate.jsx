import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { requestHeaders } from "../server headers/headers";
import { config } from "../config";

function DepartmentUpdate({ method }) {
  const DEFAULT_FORM_OBJECT = {
    name: "",
    location: "",
    budget: 0,
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const { tokenInstance } = useContext(UserContext);
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [err, setErr] = useState("");
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `${config.BASE_URL}/department/${id}/update`,
        requestHeaders(tokenInstance)
      );
      setForm(values.data);
    };
    if (id) {
      getData();
    }
  }, [tokenInstance, id]);

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
    const submitForm = e.currentTarget;
    e.preventDefault();
    if (submitForm.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (method === "update") {
        await axios.put(
          `${config.BASE_URL}/department/${id}/update`,
          form,
          requestHeaders(tokenInstance)
        );
      }
      if (method === "create") {
        await axios.post(
          `${config.BASE_URL + config.DEPARTMENT_CREATE}`,
          form,
          requestHeaders(tokenInstance)
        );
      }
      navigate("/admin/department");
    }

    setValidated(true);
  };

  return (
    <>
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
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={"Name"}
              value={form.name}
              onChange={updateFormValue("name")}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              A department is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="location"
              value={form.location}
              onChange={updateFormValue("location")}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              A location is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBudget">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={form.budget}
              onChange={updateFormValue("budget")}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              A budget is required.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default DepartmentUpdate;
