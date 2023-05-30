import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Volunteer from "../pages/Volunteer";
import createCarouselInfo from "../formatting/carouselInformation";

const volunteerInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Volunteer slide",
    "Volunteer",
    "Discover possible volunteer opportunities here."
  ),
];

describe("Volunteer component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Volunteer />
      </MemoryRouter>
    );

    const imageElements = screen.queryAllByRole("img");

    volunteerInformation.forEach((info) => {
      const matchingImage = imageElements.find(
        (image) => image.getAttribute("src") === info.src
      );
      expect(matchingImage).toBeInTheDocument();
    });
  });
});
