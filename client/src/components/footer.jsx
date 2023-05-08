import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter
      style={{ background: "#364c48" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a href="https://facebook.com/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://google.com/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://instagram.com/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="https://linkedin.com/" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-5">
              <img
                src="https://www.nicepng.com/png/detail/87-874647_red-cross-hospital-logo-hospital-logo-red-cross.png"
                style={{
                  height: "100%",
                  width: "50%",
                }}
                alt="Hospital Logo"
              ></img>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="hospital-alt" className="me-3" />
                Some 病院
              </h6>
              <p>
                Here there is some information being presented about the
                building in question.この病院に関する情報はここに貼ってある。
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "white" }}>
        © 2023 site created by:　
        <a className="text-reset fw-bold" href="https://github.com/T-R-a-c-k">
          Tyler Rack
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
