import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "../components/Cards";
import createCard from "../formatting/createCard";

import { MemoryRouter } from "react-router-dom";

const cards = [
  [
    createCard("Foundation", "Vist Foundation page", "/foundation"),
    createCard("Volunteer", "Read more", "/volunteer"),
    createCard(
      "Covid Information",
      "For more information on Covid-19, visit here",
      "/covid"
    ),
  ],
  [
    createCard("Care Programs", "Read more", "/care_programs"),
    createCard("About", "Read more", "/about"),
    createCard("Staff", "To learn more about who we are", "/staff"),
    createCard("Research", "Vist Research Page", "/research"),
  ],
];

describe("Cards Component", () => {
  it("renders the contents correctly", () => {
    render(
      <MemoryRouter>
        <Cards cards={cards} />
      </MemoryRouter>
    );

    cards.flat().forEach((item) => {
      const titleItems = screen.queryAllByText(item.title);
      const linkTitleItems = screen.queryAllByText(item.title);
      const linkItems = screen.queryAllByText(item.title);

      expect(titleItems.length).toBeGreaterThan(0);
      expect(linkTitleItems.length).toBeGreaterThan(0);
      expect(linkItems.length).toBeGreaterThan(0);
    });
  });
});
