import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Covid from "../pages/Covid";
import createAccordianInformation from "../formatting/accordianInformation";
import createCarouselInfo from "../formatting/carouselInformation";

const covidInformation = [
  createCarouselInfo(
    "https://api.time.com/wp-content/uploads/2023/05/pcr-test-covid-19.jpg",
    "Covid slide",
    "Covid",
    "Updates and guidelines in regards to Covid-19."
  ),
];

const covidAccordianInfo = [
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
  [
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
    createAccordianInformation(
      "Common Question",
      "A common answer that would be displayed for the stated common question or concern."
    ),
  ],
];

const covidAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

describe("Covid Component", () => {
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <Covid />
      </MemoryRouter>
    );
    // Assert the presence of the images on the carousel

    const imageElements = screen.queryAllByRole("img");

    covidInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });

    // Assert the presence of the accordion titles
    covidAccordianTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert the presence of the accordion items
    covidAccordianInfo.flat().forEach((item) => {
      const headerElements = screen.queryAllByText(item.header);
      const descriptionElements = screen.queryAllByText(item.description);

      expect(headerElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });

    // You can add more assertions based on your component's rendering behavior
  });
});
