import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AdminDepatrmentPage from "../pages/AdminDepartmentPage";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios"); // Mock the axios module

describe("AdminDepartmentPage component", () => {
  it("gets data from the api", async () => {
    const mockedData = [
      { _id: "1", name: "Department 1", location: "Location 1", budget: 1000 },
      { _id: "2", name: "Department 2", location: "Location 2", budget: 2000 },
    ];

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = "mockToken";

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <AdminDepatrmentPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    //Linter please stop yelling at me
    await waitFor(() => {
      const departmentTable = screen.getByText("Department table");
      expect(departmentTable).toBeInTheDocument();
    });

    await waitFor(() => {
      const departmentName1 = screen.getByText("Department 1");
      expect(departmentName1).toBeInTheDocument();
    });

    await waitFor(() => {
      const departmentName2 = screen.getByText("Department 2");
      expect(departmentName2).toBeInTheDocument();
    });
  });
});
