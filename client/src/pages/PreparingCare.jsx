import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import AccordianItems from "../components/Accordian";
import createAccordianInformation from "../formatting/accordianInformation";

const preparingCareInformation = [
  createCarouselInfo(
    "https://www.shutterstock.com/image-photo/patient-lying-down-on-hospital-600w-1706929777.jpg",
    "Preparing Care slide",
    "Preparing for Care",
    "The procedures that follow when being hospitalized to this location."
  ),
];

const preparingCareAccordianInfo = [
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

const preparingCareAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function PreparingCare() {
  return (
    <>
      <PageCarousel toDisplay={preparingCareInformation} />
      <AccordianItems
        toDisplay={preparingCareAccordianInfo}
        titles={preparingCareAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default PreparingCare;
