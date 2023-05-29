import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageCarousel from "../components/PageCarousel";
import createCarouselInfo from "../formatting/carouselInformation";
import { MemoryRouter } from "react-router-dom";

const information = [
  createCarouselInfo(
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg",
    "About slide",
    "About",
    "For information about us."
  ),
];

describe("PageCarousel component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <PageCarousel toDisplay={information} />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
