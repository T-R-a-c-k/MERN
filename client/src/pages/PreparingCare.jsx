import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const preparingCareInformation = [
  createCarouselInfo(
    "https://www.shutterstock.com/image-photo/patient-lying-down-on-hospital-600w-1706929777.jpg",
    "Preparing Care slide",
    "Preparing for Care",
    "The procedures that follow when being hospitalized to this location."
  ),
];

function PreparingCare() {
  return (
    <>
      <PageCarousel toDisplay={preparingCareInformation} />
      <NewsContainer />
    </>
  );
}
export default PreparingCare;
