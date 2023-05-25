import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

function AdminVisitationPage() {
  const [data, setData] = useState([]);
  const { tokenInstance } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/visitation/list`,
        requestHeaders(tokenInstance)
      );
      setData([...values.data]);
    };
    getData();
  }, [tokenInstance]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Visitation table</h1>

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
            <td>ID</td>
            <td>
              <strong>Occurred Date</strong>
            </td>
            <td>
              <strong>Note</strong>
            </td>
            <td>
              <strong>Prescription</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>
                  <p>{item._id}</p>
                  <Button>
                    <Link to={item._id}>Edit</Link>
                  </Button>
                </td>
                <td>{item.occurredDate.substring(0, 10)}</td>
                <td>{item.note}</td>
                <td>
                  {item.prescription.map((item) => {
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
export default AdminVisitationPage;
