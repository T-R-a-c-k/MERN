import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const VisitationUpdate = () => {
  const DEFAULT_FORM_OBJECT = {
    occurredDate: "",
    note: "",
    prescription: [],
  };

  const { tokenInstance } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [prescriptions, setPrescriptions] = useState([]);
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [validated, setValidated] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/visitation/${id}/update`,
        requestHeaders(tokenInstance)
      );
      values.data.occurredDate = values.data.occurredDate.substring(0, 10);
      setForm(values.data);

      const allPrescriptions = await axios.get(
        "http://localhost:8080/prescription/list",
        requestHeaders(tokenInstance)
      );
      setPrescriptions([...allPrescriptions.data]);
    };
    getData();
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

  const updateCheckboxValue = (key) => (e) => {
    form.prescription.includes(e.target.id)
      ? setForm({
          ...form,
          prescription: [
            ...form.prescription.filter((item) => item !== e.target.id),
          ],
        })
      : setForm({
          ...form,
          prescription: [...form.prescription, e.target.id],
        });
  };

  const submitHandler = async (e) => {
    const submitForm = e.currentTarget;
    e.preventDefault();
    if (submitForm.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);
    const occurredDateISO = new Date(form.occurredDate).toISOString();
    setForm({ ...form, occurredDate: occurredDateISO });
    await axios.put(
      `http://localhost:8080/visitation/${id}/update`,
      form,
      requestHeaders(tokenInstance)
    );
    navigate("/admin/visitation");
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
        <Form.Group className="mb-3" controlId="formBasicoccurredDate">
          <Form.Label>Occurred Date</Form.Label>
          <Form.Control
            type="date"
            value={form.occurredDate}
            onChange={updateFormValue("occurredDate")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A valid date is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicnote">
          <Form.Label>Note</Form.Label>
          <Form.Control
            type="text"
            placeholder="Note"
            value={form.note}
            onChange={updateFormValue("note")}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A first name is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicprescription">
          <Form.Label>Prescription</Form.Label>

          <div style={{ height: "30vh", overflow: "auto" }}>
            {prescriptions.map((item, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={item.name}
                  id={item._id}
                  checked={form.prescription.includes(item._id)}
                  onChange={updateCheckboxValue(form.prescription)}
                />
              </div>
            ))}
          </div>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A valid department ID is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default VisitationUpdate;
