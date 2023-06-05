import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { UserContext } from "../context/UserProvider";

import axios from "axios";
import { config } from "../config";

function StaffPortal() {
  const navigate = useNavigate();
  const { setUserInstance, setTokenInstance } = useContext(UserContext);

  const DEFAULT_FORM_OBJECT = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [err, setErr] = useState("");

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

    try {
      const response = await axios.post(
        `${config.BASE_URL + config.STAFF_LOGIN}`,
        form
      );
      const { token, user } = response.data;
      setForm(DEFAULT_FORM_OBJECT);
      setUserInstance({ ...user });
      setTokenInstance({ token });
      navigate("/");
    } catch {
      setErr("This username and password, don't match");
      setForm(DEFAULT_FORM_OBJECT);
    }
  };

  return (
    <>
      <Container>
        {err ? <p style={{ textAlign: "center", color: "Red" }}>{err}</p> : ""}
        <Form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={updateFormValue("email")}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={updateFormValue("password")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default StaffPortal;
