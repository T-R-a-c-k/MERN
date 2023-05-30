import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AdminPatientPage from "../pages/AdminPatientPage";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios"); // Mock the axios module

describe("AdminPatientPage component", () => {
  it("gets data from the api", async () => {
    const mockedData = [
      {
        _id: "1",
        firstName: "Elizabeth",
        lastName: "White",
        birthDate: "1995-12-17T03:24:00",
        medicalNumber: 345678903,
        email: "elizabethwhite@example.com",
        visitations: [
          "64627842a7f90ad6564b6aef",
          "64627847a7f90ad6564b6af1",
          "6462784aa7f90ad6564b6af3",
        ],
      },
    ];

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <AdminPatientPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const email = screen.getByRole("cell", {
        name: /elizabethwhite@example\.com/i,
      });
      expect(email).toBeInTheDocument();
    });
  });
});
