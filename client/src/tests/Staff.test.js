import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Staff from "../pages/Staff";
import createAccordianInformation from "../formatting/accordianInformation";
import createCarouselInfo from "../formatting/carouselInformation";

const staffInformation = [
  createCarouselInfo(
    "https://media.istockphoto.com/id/1324292283/photo/shot-of-a-diverse-group-of-medical-professionals-in-a-hospitals.jpg?s=612x612&w=0&k=20&c=Jfrlm02ShAJJC90DClQK0ScG6DqhEMQ3tW4KOZKlzKA=",
    "Staff slide",
    "Staff",
    "Information about those who make us."
  ),
];

const staffAccordianInfo = [
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

const staffAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

describe("Staff Component", () => {
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <Staff />
      </MemoryRouter>
    );
    // Assert the presence of the images on the carousel

    const imageElements = screen.queryAllByRole("img");

    staffInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });

    // Assert the presence of the accordion titles
    staffAccordianTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert the presence of the accordion items
    staffAccordianInfo.flat().forEach((item) => {
      const headerElements = screen.queryAllByText(item.header);
      const descriptionElements = screen.queryAllByText(item.description);

      expect(headerElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });

    // You can add more assertions based on your component's rendering behavior
  });
});
