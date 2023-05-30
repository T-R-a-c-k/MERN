import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { requestHeaders } from "../server headers/headers";
import uniqid from "uniqid";

function AdminDepartmentPage() {
  const { tokenInstance } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `http://localhost:8080/department/list`,
        requestHeaders(tokenInstance)
      );
      setData([...values.data]);
    };
    getData();
  }, [tokenInstance]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Department table</h1>

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
              <strong>Budget</strong>
            </td>
            <td>
              <strong>Location</strong>
            </td>
          </tr>
        </thead>
        <tbody key={uniqid()}>
          {data.map((item, index) => {
            return (
              <tr key={uniqid()}>
                <td style={{ width: "33%" }}>
                  <h4>{item.name}</h4>
                  <Button>
                    <Link to={item._id}>Edit</Link>
                  </Button>
                </td>
                <td>{item.location}</td>
                <td>${item.budget}</td>
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
export default AdminDepartmentPage;
