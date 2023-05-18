import React from "react";
import { useParams } from "react-router-dom";

function EditPage() {
  const { category } = useParams();
  return (
    <>
      <h1>{category}</h1>
    </>
  );
}
export default EditPage;
