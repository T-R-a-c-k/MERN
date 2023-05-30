import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import createAccordianInformation from "../formatting/accordianInformation";
import createCarouselInfo from "../formatting/carouselInformation";
import Contact from "../pages/Contact";

const contactInformation = [
  createCarouselInfo(
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Contact slide",
    "Contact",
    "Any and all inqueries for how to contact us."
  ),
];

const contactAccordianInfo = [
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

const contactAccordianTitles = [
  "An important Concern",
  "Some Other Issue",
  "Something to Consider",
];

describe("Contact Component", () => {
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    // Assert the presence of the images on the carousel

    const imageElements = screen.queryAllByRole("img");

    contactInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });

    // Assert the presence of the accordion titles
    contactAccordianTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Assert the presence of the accordion items
    contactAccordianInfo.flat().forEach((item) => {
      const headerElements = screen.queryAllByText(item.header);
      const descriptionElements = screen.queryAllByText(item.description);

      expect(headerElements.length).toBeGreaterThan(0);
      expect(descriptionElements.length).toBeGreaterThan(0);
    });

    // You can add more assertions based on your component's rendering behavior
  });
});
