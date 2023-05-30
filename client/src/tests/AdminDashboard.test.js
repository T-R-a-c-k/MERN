import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";

// Mock the UserContext values
const mockUserContextValues = {
  setUserInstance: jest.fn(),
  setTokenInstance: jest.fn(),
};

describe("AdminDashboard component", () => {
  it("has all links and fires button", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContextValues}>
          <AdminDashboard />
        </UserContext.Provider>
      </MemoryRouter>
    );

    // Assert that the rendered links are present
    expect(
      screen.getByRole("link", {
        name: /departments/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /patients/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /prescription/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /staff/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /visitations/i,
      })
    ).toBeInTheDocument();

    // Simulate click on the Log Out button
    fireEvent.click(
      screen.getByRole("button", {
        name: /log out/i,
      })
    );

    // Assert that the setUserInstance and setTokenInstance functions were called
    expect(mockUserContextValues.setUserInstance).toHaveBeenCalledWith(null);
    expect(mockUserContextValues.setTokenInstance).toHaveBeenCalledWith(null);
  });
});
