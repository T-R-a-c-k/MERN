import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const CareProgramsInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Care Programs slide",
    "Care Programs",
    "For information about potential careers."
  ),
];

function CarePrograms() {
  return (
    <>
      <PageCarousel toDisplay={CareProgramsInformation} />
      <NewsContainer />
    </>
  );
}
export default CarePrograms;
