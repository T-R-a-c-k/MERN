import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import About from "../pages/About";
import createAccordianInformation from "../formatting/accordianInformation";

const aboutAccordianInfo = [
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
  ],
];

const aboutAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

describe("About Component", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    // Add additional assertions if necessary
  });
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <About toDisplay={aboutAccordianInfo} titles={aboutAccordianTitles} />
      </MemoryRouter>
    );
    // Assert the presence of the accordion titles

    aboutAccordianTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert the presence of the accordion items
    aboutAccordianInfo.flat().forEach((item) => {
      const headerElements = screen.queryAllByText(item.header);
      const descriptionElements = screen.queryAllByText(item.description);

      expect(headerElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });

    // You can add more assertions based on your component's rendering behavior
  });
});
