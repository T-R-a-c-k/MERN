import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AdminStaffPage from "../pages/AdminStaffPage";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios"); // Mock the axios module

describe("AdminStaffPage component", () => {
  it("gets data from the api", async () => {
    const mockedData = [
      {
        _id: "1",
        firstName: "Emma",
        lastName: "Roberts",
        position: "Physician",
        salary: 80000,
        deptID: "64627915a7f90ad6564b6b2b",
        phoneNumber: "555-123-7890",
        email: "emma.roberts@example.com",
        hireDate: "2023-05-23T00:00:00Z",
        password: "Q3s#F6gN&9m^W2eD",
        role: "staff",
      },
    ];

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <AdminStaffPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const staffMember = screen.getByRole("cell", {
        name: /64627915a7f90ad6564b6b2b/i,
      });
      expect(staffMember).toBeInTheDocument();
    });
  });
});
