import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsContainer from "../components/NewsContainer";

import { MemoryRouter } from "react-router-dom";

describe("NewsContainer component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <NewsContainer />
      </MemoryRouter>
    );

    const newsContainerText = screen.getByText(
      "With ever increasing demands, check out our improvements and plans on how we plan to overcome these challenges."
    );
    expect(newsContainerText).toBeInTheDocument();

    const recentEvents = screen.getByTestId("recent-events");
    expect(recentEvents).toBeInTheDocument();
  });
  it("has clickable links", () => {
    render(
      <MemoryRouter>
        <NewsContainer />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      fireEvent.click(link);
    });
  });
});
