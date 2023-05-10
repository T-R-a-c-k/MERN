import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const contactInformation = [
  createCarouselInfo(
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Contact slide",
    "Contact",
    "Any and all inqueries for how to contact us."
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
