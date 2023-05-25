import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

function AdminPrescriptionPage() {
  const [data, setData] = useState([]);
  const { tokenInstance } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/prescription/list`,
        requestHeaders(tokenInstance)
      );
      setData([...values.data]);
    };
    getData();
  }, [tokenInstance]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Prescription table</h1>

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
              <strong>Usage</strong>
            </td>
            <td>
              <strong>Side Effects</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>
                  <h4>{item.name}</h4>
                  <Button>
                    <Link to={item.name}>Edit</Link>
                  </Button>
                </td>
                <td>{item.usage}</td>
                <td>
                  {item.sideEffects.map((item) => {
                    return <pre>{item}</pre>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default AdminPrescriptionPage;
