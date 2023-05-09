import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const volunteerInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "First slide",
    "Some text about the image"
  ),
];

function Volunteer() {
  return (
    <>
      <PageCarousel toDisplay={volunteerInformation} />
      <NewsContainer />
    </>
  );
}
export default Volunteer;
