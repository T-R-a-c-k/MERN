import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Foundation from "../pages/Foundation";
import createCarouselInfo from "../formatting/carouselInformation";

const foundationInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "New research slide",
    "New Research Facities",
    "With the increased funding and on board of staff, we have opened up a new research facilities!"
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Methodology slide",
    "Methodology and Practices",
    "Any questions or concerns with how operations are carried out."
  ),
  createCarouselInfo(
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Individuals slide",
    "Indivual Qualities",
    "About some of the talented individuals who help drive us forward."
  ),
];

describe("Career component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Foundation />
      </MemoryRouter>
    );

    foundationInformation.forEach((info) => {
      expect(screen.getByText(info.text)).toBeInTheDocument();
    });
  });
});
