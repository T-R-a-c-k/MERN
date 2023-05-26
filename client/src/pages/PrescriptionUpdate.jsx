import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const PrescriptionUpdate = ({ method }) => {
  const DEFAULT_FORM_OBJECT = {
    name: "",
    usage: "",
    sideEffects: [],
  };

  const { tokenInstance } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [err, setErr] = useState("");

  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/prescription/${id}/update`,
        requestHeaders(tokenInstance)
      );
      //values.data.sideEffects = values.data.sideEffects.toString();
      setForm(values.data);
    };
    if (id) {
      getData();
    }
  }, [id, tokenInstance]);

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

  const updateFormArray = (key) => (e) => {
    const sideEffectsText = e.target.value.split(",");
    setForm({
      ...form,
      sideEffects: [...sideEffectsText],
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (method === "update") {
      await axios.put(
        `http://localhost:8080/prescription/${id}/update`,
        form,
        requestHeaders(tokenInstance)
      );
    }
    if (method === "create") {
      await axios.post(
        `http://localhost:8080/prescription/create`,
        form,
        requestHeaders(tokenInstance)
      );
    }
    navigate("/admin/prescription");
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={"Name"}
            value={form.name}
            onChange={updateFormValue("name")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsage">
          <Form.Label>Usage</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usage"
            value={form.usage}
            onChange={updateFormValue("usage")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSideEffect">
          <Form.Label>Side Effect (to add more, use commas)</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={form.sideEffects}
            onChange={updateFormArray()}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default PrescriptionUpdate;
