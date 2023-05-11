import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";
import AccordianItems from "../components/Accordian";
import createAccordianInformation from "../formatting/accordianInformation";

const contactInformation = [
  createCarouselInfo(
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Contact slide",
    "Contact",
    "Any and all inqueries for how to contact us."
  ),
];

const contactAccordianInfo = [
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

const contactAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

function Contact() {
  return (
    <>
      <PageCarousel toDisplay={contactInformation} />
      <AccordianItems
        toDisplay={contactAccordianInfo}
        titles={contactAccordianTitles}
      />
      <NewsContainer />
    </>
  );
}
export default Contact;
