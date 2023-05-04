import React from "react";
import Styles from "../css/homePage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const ads = [
    {
      url: "https://www.infrastructureontario.ca/contentassets/1219903f3c434be9ba09639252520e91/artistic_rendering_of_trillium_health_partners_mississauga_hospital_site.4924f9.png?rxy=0.5,0.5&width=720&height=540&rmode=crop&bgcolor=%23FFFFFF",
      content: "This is some information regarding this image",
      alt: "The hospital in question",
    },
  ];
  //.card-container somewhere
  return (
    <Container fluid>
      <Container>
        <div className={Styles.home_bar}>
          <div className={Styles.home_bar_left}>
            <div className={Styles.home_logo}>Logo</div>
          </div>
          <div className={Styles.home_bar_right}>
            <div className={Styles.home_bar_right_top}>
              <div>Contact</div>
              <div>Covid-19</div>
              <div>FAQ</div>
            </div>
            <div className={Styles.home_bar_right_bottom}>
              <div>Staff Portal</div>
              <div>Parking</div>
            </div>
          </div>
        </div>
      </Container>
      <Row>
        <Col className={Styles.card_container}>
          {ads.map((ad, index) => {
            return (
              <Container fluid className={Styles.no_pad}>
                <Row className={Styles.no_pad}>
                  <Col className={Styles.no_pad}>
                    <div key={index} className={Styles.card}>
                      <img
                        src={ad.url}
                        className={Styles.card_img}
                        alt={ad.alt}
                      ></img>
                    </div>
                  </Col>
                  <Col className={Styles.card_content} xs={3}>
                    <div>{ad.content}</div>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <button>Next</button>
          <button>Previous</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
