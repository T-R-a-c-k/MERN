import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const faqInformation = [
  createCarouselInfo(
    "https://www.shutterstock.com/image-vector/faq-blue-typography-banner-600w-1356204374.jpg",
    "FAQ slide",
    "FAQ",
    "General information that is often looked for can be found here."
  ),
];

function FAQ() {
  return (
    <>
      <PageCarousel toDisplay={faqInformation} />
      <NewsContainer />
    </>
  );
}
export default FAQ;
