import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

function AdminDepatrmentPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(`http://localhost:8080/department/list`);
      setData([...values.data]);
    };
    getData();
  }, []);
  return (
    <>
      <h1>Department table</h1>

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
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td style={{ width: "33%" }}>
                  <h4>{item.name}</h4>
                  <Button>Edit</Button>
                </td>
                <td>{item.location}</td>
                <td>${item.budget}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default AdminDepatrmentPage;
