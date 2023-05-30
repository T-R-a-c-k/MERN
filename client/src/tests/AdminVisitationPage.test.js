import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import AdminVisitationPage from "../pages/AdminVisitationPage";

jest.mock("axios"); // Mock the axios module

describe("AdminVisitationPage component", () => {
  it("gets data from the api", async () => {
    const mockedData = [
      {
        _id: "1",
        occurredDate: "2025-06-28T10:25:00Z",
        note: "Routine check-up.",
        prescription: ["646264e73f4e1f7453cba8ae"],
      },
    ];

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <AdminVisitationPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const visitation = screen.getByRole("cell", {
        name: /1 edit/i,
      });
      expect(visitation).toBeInTheDocument();
    });
  });
});
