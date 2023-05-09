import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const researchInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "First slide",
    "Some text about the image"
  ),
];

function Research() {
  return (
    <>
      <PageCarousel toDisplay={researchInformation} />
      <NewsContainer />
    </>
  );
}
export default Research;
