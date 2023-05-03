import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const { data: patientsList } = await axios.get(
        "http://localhost:8080/sign_up"
      );
      setPatients(patientsList);
    };
    fetchPatients();
  }, []);
  return (
    <>
      <div>{patients.length}</div>
      {patients.map((patient) => {
        return <div>{patient}</div>;
      })}
    </>
  );
};

export default Home;
