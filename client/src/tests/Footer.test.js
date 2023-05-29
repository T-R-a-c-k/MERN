import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

import { MemoryRouter } from "react-router-dom";

describe("Footer component", () => {
  it("renders content", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const footerText = screen.getByText(
      "Here there is some information being presented about the building in question.この病院に関する情報はここに貼ってある。"
    );
    expect(footerText).toBeInTheDocument();
  });
  it("Has clickable links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const facebookIcon = screen.getByTestId("facebook-icon");
    fireEvent.click(facebookIcon);
  });
});
