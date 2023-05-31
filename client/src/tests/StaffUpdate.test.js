import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import StaffUpdate from "../pages/StaffUpdate";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import Router from "react-router";

jest.mock("axios"); // Mock the axios module
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

describe("staff update component", () => {
  it("gets data from the api and loads to the screen", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ email: "emma.roberts@example.com" });
    const mockedData = {
      firstName: "Emma",
      lastName: "Roberts",
      position: "Physician",
      salary: 80000,
      deptID: "123",
      phoneNumber: "555-123-7890",
      email: "emma.roberts@example.com",
      hireDate: "2023-05-23T00:00:00Z",
      password: "Q3s#F6gN&9m^W2eD",
      role: "staff",
    };

    const mockedDepartments = [
      { _id: "123", name: "Department 1" },
      { _id: "456", name: "Department 2" },
    ];

    await axios.get.mockResolvedValueOnce({ data: mockedData }); // Mock the axios.get function
    await axios.get.mockResolvedValueOnce({ data: mockedDepartments });

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <StaffUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const staffFirst = screen.getByRole("textbox", {
        name: /first name/i,
      });
      expect(staffFirst.value).toBe(mockedData.firstName);
    });
    expect(screen.getByLabelText("Last Name")).toHaveValue(mockedData.lastName);
    expect(screen.getByLabelText("Position")).toHaveValue(mockedData.position);
    expect(screen.getByLabelText("Salary")).toHaveValue(mockedData.salary);
    expect(screen.getByLabelText("Department ID")).toHaveValue(
      mockedData.deptID
    );
    expect(screen.getByLabelText("Phone Number")).toHaveValue(
      mockedData.phoneNumber
    );
    expect(screen.getByLabelText("Email")).toHaveValue(mockedData.email);
    expect(screen.getByLabelText("Hired Date")).toHaveValue(
      mockedData.hireDate
    );
    expect(screen.getByLabelText("Role")).toHaveValue(mockedData.role);

    expect(screen.getByLabelText("Department ID")).toContainHTML(
      '<option value="123">Department 1</option>'
    );
    expect(screen.getByLabelText("Department ID")).toContainHTML(
      '<option value="456">Department 2</option>'
    );

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(`/staff/${mockedData.email}/update`),
      expect.any(Object)
    );

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("/department/list"),
      expect.any(Object)
    );
  });

  it("should submit the form with updated values", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ email: "emma.roberts@example.com" });
    const mockedData = {
      firstName: "Emma",
      lastName: "Roberts",
      position: "Physician",
      salary: 80000,
      deptID: "123",
      phoneNumber: "555-123-7890",
      email: "emma.roberts@example.com",
      hireDate: "2023-05-23T00:00:00Z",
      password: "Q3s#F6gN&9m^W2eD",
      role: "staff",
    };

    const mockedDepartments = [
      { _id: "123", name: "Department 1" },
      { _id: "456", name: "Department 2" },
    ];

    await axios.get.mockResolvedValueOnce({ data: mockedData }); // Mock the axios.get function
    await axios.get.mockResolvedValueOnce({ data: mockedDepartments });

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <StaffUpdate />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const staffFirstInput = await screen.findByLabelText("First Name");
    const lastInput = screen.getByLabelText("Last Name");
    const positionInput = screen.getByLabelText("Position");
    const emailInput = screen.getByLabelText("Email");
    const roleInput = screen.getByLabelText("Role");
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      firstName: "Emma NEW",
      lastName: "Roberts NEW",
      position: "Physician NEW",
      salary: 80000,
      deptID: "123",
      phoneNumber: "555-123-7890",
      email: "new.roberts@example.com",
      hireDate: "2023-05-23T00:00:00Z",
      password: "Q3s#F6gN&9m^W2eD",
      role: "staff NEW",
    };

    fireEvent.change(staffFirstInput, {
      target: { value: mockedNewData.firstName },
    });
    fireEvent.change(lastInput, {
      target: { value: mockedNewData.lastName },
    });
    fireEvent.change(positionInput, {
      target: { value: mockedNewData.position },
    });

    fireEvent.change(emailInput, {
      target: { value: mockedNewData.email },
    });
    fireEvent.change(roleInput, {
      target: { value: mockedNewData.role },
    });

    expect(staffFirstInput.value).toBe(mockedNewData.firstName);
    expect(lastInput.value).toBe(mockedNewData.lastName);
    expect(positionInput.value).toBe(mockedNewData.position);
    expect(emailInput.value).toBe(mockedNewData.email);
    expect(roleInput.value).toBe(mockedNewData.role);

    fireEvent.click(submitButton);
    expect(axios.put).toHaveBeenCalled();
  });
});
