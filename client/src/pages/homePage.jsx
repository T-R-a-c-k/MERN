import React from "react";

import { MDBIcon } from "mdb-react-ui-kit";

import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";
import createCarouselInfo from "../formatting/carouselInformation";

const homeInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    "First slide",
    "Some text about the image"
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
    "Second slide",
    "Some text about the image"
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "Third slide",
    "Some text about the image"
  ),
];

const SearchBar = () => {
  return (
    <>
      <form
        className="form-inline mt-5 mb-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      ;
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <PageCarousel toDisplay={homeInformation} />
      <SearchBar />
      <NewsContainer />
    </>
  );
};
export default HomePage;
