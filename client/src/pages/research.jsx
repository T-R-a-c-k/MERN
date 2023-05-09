import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const researchInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "Research slide",
    "Research",
    "Avaliable research positions and means of onboarding information can all be located here."
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
