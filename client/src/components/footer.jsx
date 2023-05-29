import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import Styles from "../css/footer.module.css";

function Footer() {
  return (
    <MDBFooter
      style={{ background: "#364c48" }}
      className="text-center text-lg-start text-muted"
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ color: "white" }}
      >
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <Link
            to={"https://facebook.com/"}
            className="me-4 text-reset"
            data-testid="facebook-icon"
          >
            <MDBIcon fab icon="facebook-f" className={Styles.footerLink} />
          </Link>
          <Link to={"https://twitter.com/"} className="me-4 text-reset">
            <MDBIcon fab icon="twitter" className={Styles.footerLink} />
          </Link>
          <Link to={"https://google.com/"} className="me-4 text-reset">
            <MDBIcon fab icon="google" className={Styles.footerLink} />
          </Link>
          <Link to={"https://instagram.com/"} className="me-4 text-reset">
            <MDBIcon fab icon="instagram" className={Styles.footerLink} />
          </Link>
          <Link to={"https://linkedin.com/"} className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" className={Styles.footerLink} />
          </Link>
        </div>
      </section>

      <section style={{ color: "white" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-5">
              <img
                src="https://www.freeiconspng.com/uploads/ambulance-cross-hospital-icon-11.png"
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
                Toronto, ON, CA
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
        <Link
          className="text-reset fw-bold"
          to={"https://github.com/T-R-a-c-k"}
        >
          Tyler Rack
        </Link>
      </div>
    </MDBFooter>
  );
}

export default Footer;
