import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Research from "../pages/Research";
import createCarouselInfo from "../formatting/carouselInformation";

const researchInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "Research slide",
    "Research",
    "Avaliable research positions and means of onboarding information can all be located here."
  ),
];

describe("Career component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Research />
      </MemoryRouter>
    );

    const imageElements = screen.queryAllByRole("img");
    researchInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });
  });
});
