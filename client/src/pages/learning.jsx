import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const learningInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1664902276790-90624a60ff47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "First slide",
    "Some text about the image"
  ),
];

function Learning() {
  return (
    <>
      <PageCarousel toDisplay={learningInformation} />
      <NewsContainer />
    </>
  );
}
export default Learning;
