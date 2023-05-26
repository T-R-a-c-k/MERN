import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const StaffUpdate = () => {
  const DEFAULT_FORM_OBJECT = {
    firstName: "",
    lastName: "",
    position: "",
    salary: 0,
    deptID: "",
    phoneNumber: "",
    email: "",
    hireDate: "",
    role: "",
  };

  const { tokenInstance } = useContext(UserContext);
  const navigate = useNavigate();
  const { email } = useParams();
  const [form, setForm] = useState(DEFAULT_FORM_OBJECT);
  const [department, setDepartment] = useState([]);
  const [validated, setValidated] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (email) {
        const values = await axios.get(
          `http://localhost:8080/staff/${email}/update`,
          requestHeaders(tokenInstance)
        );
        values.data.hireDate = values.data.hireDate.substring(0, 10);
        setForm(values.data);
      }

      const departments = await axios.get(
        "http://localhost:8080/department/list",
        requestHeaders(tokenInstance)
      );
      setDepartment([...departments.data]);
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
    const submitForm = e.currentTarget;
    e.preventDefault();
    if (submitForm.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);
    const hireDateISO = new Date(form.hireDate).toISOString();
    setForm({ ...form, hireDate: hireDateISO });
    await axios.put(
      `http://localhost:8080/staff/${email}/update`,
      form,
      requestHeaders(tokenInstance)
    );
    navigate("/admin/staff");
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
            placeholder="First Name"
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

        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            value={form.position}
            onChange={updateFormValue("position")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A position is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicsalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            value={form.salary}
            onChange={updateFormValue("salary")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A salary is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicdeptID">
          <Form.Label>Department ID</Form.Label>

          <Form.Select
            aria-label="Default select example"
            value={form.deptID}
            onChange={updateFormValue("deptID")}
          >
            {department.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A valid department ID is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={form.phoneNumber}
            onChange={updateFormValue("phoneNumber")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A phone number with the format '###-###-####' is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={updateFormValue("email")}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A proper email format is required. (i.e. example@example.com)
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasichireDate">
          <Form.Label>Hired Date</Form.Label>
          <Form.Control
            type="date"
            value={form.hireDate}
            onChange={updateFormValue("hireDate")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A valid date is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            value={form.role}
            onChange={updateFormValue("role")}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            A role is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default StaffUpdate;
