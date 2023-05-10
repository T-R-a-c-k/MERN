import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const aboutInformation = [
  createCarouselInfo(
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg",
    "About slide",
    "About",
    "For information about us."
  ),
];

function About() {
  return (
    <>
      <PageCarousel toDisplay={aboutInformation} />
      <NewsContainer />
    </>
  );
}
export default About;
