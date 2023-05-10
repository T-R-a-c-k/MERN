import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

function NotFound() {
  return (
    <section className="">
      <MDBContainer className="text-center text-md-start mt-5">
        <MDBRow className="mt-5">
          <MDBCol md="3" lg="4" xl="5" className="mx-auto mb-4">
            <p style={{ textAlign: "center" }}>
              The page you are trying to reach does not exist
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default NotFound;
