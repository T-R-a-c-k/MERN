import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { requestHeaders } from "../server headers/headers";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import uniqid from "uniqid";
import { config } from "../config";

function AdminStaffPage() {
  const [data, setData] = useState([]);
  const { tokenInstance } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(
        `${config.BASE_URL + config.STAFF_LIST}`,
        requestHeaders(tokenInstance)
      );
      setData([...values.data]);
    };
    getData();
  }, [tokenInstance]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Staff table</h1>

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
              <strong>Position</strong>
            </td>
            <td>
              <strong>Salary</strong>
            </td>
            <td>
              <strong>Department</strong>
            </td>
            <td>
              <strong>Phone Number</strong>
            </td>
            <td>
              <strong>Email</strong>
            </td>
            <td>
              <strong>Hired Date</strong>
            </td>
            <td>
              <strong>Role</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={uniqid()}>
                <td>
                  <h4>{item.fullName}</h4>
                  <Button>
                    <Link to={item.email}>Edit</Link>
                  </Button>
                </td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td>{item.deptID}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.hireDate.substring(0, 10)}</td>
                <td>{item.role}</td>
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
export default AdminStaffPage;
