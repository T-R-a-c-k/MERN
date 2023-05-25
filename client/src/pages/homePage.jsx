import React from "react";
import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const homeInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
    "Information for visitors slide",
    "Information for Patients and Vistors",
    "For everything related to checking in, masking, and any additional updates for patients and family members."
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    "Vistor Guidelines slide",
    "Vistor Guidelines",
    "Please check the guidelines before planning a visit."
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "New Opening slide",
    "New Openings",
    "More patients are expected to be served with the increased number of staff and rooms."
  ),
];

const HomePage = () => {
  return (
    <>
      <PageCarousel toDisplay={homeInformation} />

      <NewsContainer />
    </>
  );
};
export default HomePage;
