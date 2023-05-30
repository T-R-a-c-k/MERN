import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

jest.mock("axios"); // Mock the axios module

describe("Header component", () => {
  it("loads data to the page", async () => {
    const userInstance = {
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
    };

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ userInstance, tokenInstance }}>
          <Header />
        </UserContext.Provider>
      </MemoryRouter>
    );

    console.log(userInstance.firstName);
    await waitFor(() => {
      const staffMember = screen.getByRole("link", {
        name: /Welcome, Emma/i,
      });
      expect(staffMember).toBeInTheDocument();
    });
  });
});
