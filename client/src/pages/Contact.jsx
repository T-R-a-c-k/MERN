import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const contactInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Contact slide",
    "Contact",
    "For information about potential careers."
  ),
];

function Contact() {
  return (
    <>
      <PageCarousel toDisplay={contactInformation} />
      <NewsContainer />
    </>
  );
}
export default Contact;
