import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Learning from "../pages/Learning";
import createCarouselInfo from "../formatting/carouselInformation";

const learningInformation = [
  createCarouselInfo(
    "https://images.unsplash.com/photo-1664902276790-90624a60ff47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Learning slide",
    "Learning",
    "Individuals looking for co-op, educational and future opportunities are advised to look through here."
  ),
];

describe("Learning component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Learning />
      </MemoryRouter>
    );

    learningInformation.forEach((info) => {
      expect(screen.getByText(info.text)).toBeInTheDocument();
    });
  });
});
