import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import createAccordianInformation from "../formatting/accordianInformation";
import AccordianItems from "../components/Accordian";

const covidInformation = [
  createCarouselInfo(
    "https://api.time.com/wp-content/uploads/2023/05/pcr-test-covid-19.jpg",
    "Covid slide",
    "Covid",
    "Updates and guidelines in regards to Covid-19."
  ),
];

const covidAccordianInfo = [
  [
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

const covidAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function Covid() {
  return (
    <>
      <PageCarousel toDisplay={covidInformation} />
      <AccordianItems
        toDisplay={covidAccordianInfo}
        titles={covidAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default Covid;
