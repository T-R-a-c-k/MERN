import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const covidInformation = [
  createCarouselInfo(
    "https://api.time.com/wp-content/uploads/2023/05/pcr-test-covid-19.jpg",
    "Covid slide",
    "Covid",
    "Updates and guidelines in regards to Covid-19."
  ),
];

function Covid() {
  return (
    <>
      <PageCarousel toDisplay={covidInformation} />
      <NewsContainer />
    </>
  );
}
export default Covid;
