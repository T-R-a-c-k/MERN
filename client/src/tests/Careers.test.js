import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Careers from "../pages/Careers";
import createCarouselInfo from "../formatting/carouselInformation";

const careerInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Career slide",
    "Careers",
    "For information about potential careers."
  ),
];

describe("Career component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Careers />
      </MemoryRouter>
    );

    careerInformation.forEach((info) => {
      expect(screen.getByText(info.text)).toBeInTheDocument();
    });
  });
});
