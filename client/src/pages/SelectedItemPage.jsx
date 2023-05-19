import React from "react";
import { useParams } from "react-router-dom";

function SelectedItem() {
  const { id } = useParams();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
    </>
  );
}
export default SelectedItem;
