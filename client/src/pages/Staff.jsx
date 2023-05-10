import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const staffInformation = [
  createCarouselInfo(
    "https://media.istockphoto.com/id/1324292283/photo/shot-of-a-diverse-group-of-medical-professionals-in-a-hospitals.jpg?s=612x612&w=0&k=20&c=Jfrlm02ShAJJC90DClQK0ScG6DqhEMQ3tW4KOZKlzKA=",
    "Staff slide",
    "Staff",
    "Information about those who make us."
  ),
];

function Staff() {
  return (
    <>
      <PageCarousel toDisplay={staffInformation} />
      <NewsContainer />
    </>
  );
}
export default Staff;
