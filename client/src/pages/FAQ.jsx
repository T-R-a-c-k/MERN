import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import AccordianItems from "../components/Accordian";
import createAccordianInformation from "../formatting/accordianInformation";

const faqInformation = [
  createCarouselInfo(
    "https://www.shutterstock.com/image-vector/faq-blue-typography-banner-600w-1356204374.jpg",
    "FAQ slide",
    "FAQ",
    "General information that is often looked for can be found here."
  ),
];

const faqAccordianInfo = [
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

const faqAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function FAQ() {
  return (
    <>
      <PageCarousel toDisplay={faqInformation} />
      <AccordianItems
        toDisplay={faqAccordianInfo}
        titles={faqAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default FAQ;
