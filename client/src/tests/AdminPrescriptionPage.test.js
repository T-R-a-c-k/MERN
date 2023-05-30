import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AdminPrescriptionPage from "../pages/AdminPrescriptionPage";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios"); // Mock the axios module

describe("AdminPatientPage component", () => {
  it("gets data from the api", async () => {
    const mockedData = [
      {
        _id: "1",
        name: "Abilify",
        usage: "Treating schizophrenia and bipolar disorder",
        sideEffects: ["Nausea", "Weight gain", "Restlessness"],
      },
    ];

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <AdminPrescriptionPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const prescription = screen.getByRole("heading", {
        name: /abilify/i,
      });
      expect(prescription).toBeInTheDocument();
    });
  });
});
