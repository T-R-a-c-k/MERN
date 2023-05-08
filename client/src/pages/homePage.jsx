import React from "react";

import { MDBIcon } from "mdb-react-ui-kit";

import PageCarousel from "../components/PageCarousel";
import NewsContainer from "../components/NewsContainer";

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
      <PageCarousel text={"test props"} />
      <SearchBar />
      <NewsContainer />
    </>
  );
};
export default HomePage;
