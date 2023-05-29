import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccordianItems from "../components/Accordian";
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

describe("AccordianItems Component", () => {
  it("renders the contents correctly", () => {
    render(
      <AccordianItems
        toDisplay={aboutAccordianInfo}
        titles={aboutAccordianTitles}
      />
    );
    aboutAccordianInfo.flat().forEach((item) => {
      const headerItems = screen.queryAllByText(item.header);
      const descriptionItems = screen.queryAllByText(item.description);

      expect(headerItems.length).toBeGreaterThan(0);
      expect(descriptionItems.length).toBeGreaterThan(0);
    });
  });
});
