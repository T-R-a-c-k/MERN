import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import PatientUpdate from "../pages/PatientUpdate";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import Router from "react-router";

jest.mock("axios"); // Mock the axios module
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

describe("patient update component", () => {
  it("gets data from the api", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ email: "elizabethwhite@example.com" });
    const mockedData = {
      firstName: "Elizabeth",
      lastName: "White",
      birthDate: "1982-10-06",
      medicalNumber: 345678903,
      email: "elizabethwhite@example.com",
      visitations: [
        "64627842a7f90ad6564b6aef",
        "64627847a7f90ad6564b6af1",
        "6462784aa7f90ad6564b6af3",
      ],
    };

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function
    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <PatientUpdate />
        </UserContext.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const patientFirst = screen.getByRole("textbox", {
        name: /first name/i,
      });
      expect(patientFirst.value).toBe(mockedData.firstName);
    });
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8080/patient/${mockedData.email}/update`,
      { headers: { Authorization: `Bearer ${tokenInstance.token}` } }
    );
  });

  it("should submit the form with updated values", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ email: "elizabethwhite@example.com" });
    const mockedData = {
      firstName: "Elizabeth",
      lastName: "White",
      birthDate: "1982-10-06",
      medicalNumber: "345678903",
      email: "elizabethwhite@example.com",
      visitations: [
        "64627842a7f90ad6564b6aef",
        "64627847a7f90ad6564b6af1",
        "6462784aa7f90ad6564b6af3",
      ],
    };

    await axios.get.mockResolvedValue({ data: mockedData });
    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <PatientUpdate />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const firstNameInput = await screen.findByRole("textbox", {
      name: /first name/i,
    });
    const lastNameInput = await screen.findByRole("textbox", {
      name: /last name/i,
    });
    const birthDateInput = await screen.findByLabelText(/birth date/i);
    const medicalNumberInput = await screen.findByRole("spinbutton", {
      name: /medical number/i,
    });
    const emailInput = await screen.findByRole("textbox", {
      name: /email/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      firstName: "Elizabeth NEW",
      lastName: "White NEW",
      birthDate: "1982-10-06",
      medicalNumber: "345678903",
      email: "elizabethwhiteNEW@example.com",
      visitations: [
        "64627842a7f90ad6564b6aef",
        "64627847a7f90ad6564b6af1",
        "6462784aa7f90ad6564b6af3",
      ],
    };

    fireEvent.change(firstNameInput, {
      target: { value: mockedNewData.firstName },
    });
    fireEvent.change(lastNameInput, {
      target: { value: mockedNewData.lastName },
    });
    fireEvent.change(birthDateInput, {
      target: { value: mockedNewData.birthDate },
    });
    fireEvent.change(medicalNumberInput, {
      target: { value: mockedNewData.medicalNumber },
    });
    fireEvent.change(emailInput, {
      target: { value: mockedNewData.email },
    });

    expect(firstNameInput.value).toBe(mockedNewData.firstName);
    expect(lastNameInput.value).toBe(mockedNewData.lastName);
    expect(birthDateInput.value).toBe(mockedNewData.birthDate);
    expect(medicalNumberInput.value).toBe(mockedNewData.medicalNumber);
    expect(emailInput.value).toBe(mockedNewData.email);

    fireEvent.click(submitButton);
  });
});
