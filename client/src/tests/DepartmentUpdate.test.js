import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import DepartmentUpdate from "../pages/DepartmentUpdate";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import Router from "react-router";

jest.mock("axios"); // Mock the axios module
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

describe("update component", () => {
  it("gets data from the api", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      name: "Department 1",
      location: "Location 1",
      budget: 1000,
    };

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <DepartmentUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const departmentName = screen.getByRole("textbox", {
        name: /department name/i,
      });
      expect(departmentName.value).toBe(mockedData.name);
    });
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8080/department/${mockedData._id}/update`,
      { headers: { Authorization: `Bearer ${tokenInstance.token}` } }
    );
  });
  it("should submit the form with updated values", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      name: "Department 1",
      location: "Location 1",
      budget: 1000,
    };

    await axios.get.mockResolvedValue({ data: mockedData });
    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <DepartmentUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const departmentNameInput = await screen.findByLabelText("Department Name");
    const locationInput = await screen.findByLabelText("Location");
    const budgetInput = await screen.findByLabelText("Budget");
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      name: "New Department",
      location: "New Location",
      budget: "2000",
    };

    fireEvent.change(departmentNameInput, {
      target: { value: mockedNewData.name },
    });
    fireEvent.change(locationInput, {
      target: { value: mockedNewData.location },
    });
    fireEvent.change(budgetInput, { target: { value: mockedNewData.budget } });

    expect(departmentNameInput.value).toBe(mockedNewData.name);
    expect(locationInput.value).toBe(mockedNewData.location);
    expect(budgetInput.value).toBe(mockedNewData.budget);

    fireEvent.click(submitButton);
    expect(axios.put).toHaveBeenCalled();
  });
});
