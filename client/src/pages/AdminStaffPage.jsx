import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminStaffPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(`http://localhost:8080/staff/list`);
      setData([...values.data]);
    };
    getData();
  }, []);
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
              <tr>
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
                <td>{item.hireDateFormatted}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default AdminStaffPage;
