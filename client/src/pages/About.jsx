import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import AccordianItems from "../components/Accordian";
import createAccordianInformation from "../formatting/accordianInformation";

const aboutInformation = [
  createCarouselInfo(
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg",
    "About slide",
    "About",
    "For information about us."
  ),
];

const aboutAccordianInfo = [
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
  ],
];

const aboutAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function About() {
  return (
    <>
      <PageCarousel toDisplay={aboutInformation} />
      <AccordianItems
        toDisplay={aboutAccordianInfo}
        titles={aboutAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default About;
