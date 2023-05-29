import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../pages/About";

describe("About component", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    // Add additional assertions if necessary
  });
});
