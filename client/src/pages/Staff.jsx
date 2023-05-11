import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import AccordianItems from "../components/Accordian";
import createAccordianInformation from "../formatting/accordianInformation";

const staffInformation = [
  createCarouselInfo(
    "https://media.istockphoto.com/id/1324292283/photo/shot-of-a-diverse-group-of-medical-professionals-in-a-hospitals.jpg?s=612x612&w=0&k=20&c=Jfrlm02ShAJJC90DClQK0ScG6DqhEMQ3tW4KOZKlzKA=",
    "Staff slide",
    "Staff",
    "Information about those who make us."
  ),
];

const staffAccordianInfo = [
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
];

const staffAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function Staff() {
  return (
    <>
      <PageCarousel toDisplay={staffInformation} />
      <AccordianItems
        toDisplay={staffAccordianInfo}
        titles={staffAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default Staff;
