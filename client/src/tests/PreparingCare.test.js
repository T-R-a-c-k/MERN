import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import PreparingCare from "../pages/PreparingCare";
import createAccordianInformation from "../formatting/accordianInformation";
import createCarouselInfo from "../formatting/carouselInformation";

const preparingCareInformation = [
  createCarouselInfo(
    "https://www.shutterstock.com/image-photo/patient-lying-down-on-hospital-600w-1706929777.jpg",
    "Preparing Care slide",
    "Preparing for Care",
    "The procedures that follow when being hospitalized to this location."
  ),
];

const preparingCareAccordianInfo = [
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
];

const preparingCareAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

describe("PreparingCare Component", () => {
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <PreparingCare />
      </MemoryRouter>
    );
    // Assert the presence of the images on the carousel

    const imageElements = screen.queryAllByRole("img");

    preparingCareInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });

    // Assert the presence of the accordion titles
    preparingCareAccordianTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert the presence of the accordion items
    preparingCareAccordianInfo.flat().forEach((item) => {
      const headerElements = screen.queryAllByText(item.header);
      const descriptionElements = screen.queryAllByText(item.description);

      expect(headerElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });

    // You can add more assertions based on your component's rendering behavior
  });
});
