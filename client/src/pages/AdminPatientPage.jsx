import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { requestHeaders } from "../server headers/headers";
import uniqid from "uniqid";
import { config } from "../config";

function AdminPatientPage() {
  const [data, setData] = useState([]);
  const { tokenInstance } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `${config.BASE_URL + config.PATIENT_LIST}`,
        requestHeaders(tokenInstance)
      );
      setData([...values.data]);
    };
    getData();
  }, [tokenInstance]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Patient table</h1>

      <Table
        striped
        bordered
        hover
        responsive
        size="sm"
        style={{
          margin: "0%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <thead style={{ textAlign: "center" }}>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Birth Date</strong>
            </td>
            <td>
              <strong>Medical Number</strong>
            </td>
            <td>
              <strong>Email</strong>
            </td>
            <td>
              <strong>Visitations</strong>
            </td>
          </tr>
        </thead>
        <tbody key={uniqid()}>
          {data.map((item, index) => {
            return (
              <tr key={uniqid()}>
                <td key={uniqid()}>
                  <h4>{item.fullName}</h4>
                  <Button>
                    <Link to={item.email}>Edit</Link>
                  </Button>
                </td>
                <td>{item.birthDate.substring(0, 10)}</td>
                <td>{item.medicalNumber}</td>
                <td>{item.email}</td>
                <td key={uniqid()}>
                  {item.visitations.map((item) => {
                    return <pre key={uniqid()}>{item}</pre>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container fluid style={{ textAlign: "center" }}>
        <Button>
          <Link to="create" style={{ color: "white" }}>
            Create
          </Link>
        </Button>
      </Container>
    </>
  );
}
export default AdminPatientPage;
