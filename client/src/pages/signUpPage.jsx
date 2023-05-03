import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";

function SignUp() {
  const DEFAULT_FORM_OBJECT = {
    firstName: "",
    lastName: "",
  };

  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);

  const handleSubmit = async (event) => {
    axios.post("https://localhost:8080/hello");

    setForm(DEFAULT_FORM_OBJECT);

    setValidated(true);
    event.preventDefault();
  };

  const handleChange = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <h1>Enter your information</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
