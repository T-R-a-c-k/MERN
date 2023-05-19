import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

//TO DO
//Add a patient to each visitation
//Reformat this
//Probably will be the last thing done

function AdminVisitationPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const values = await axios.get(`http://localhost:8080/visitation/list`);
      setData([...values.data]);
    };
    getData();
  }, []);
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
                <td>{item.occurredDateFormatted}</td>
                <td>{item.note}</td>
                <td>{item.prescription}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default AdminVisitationPage;
