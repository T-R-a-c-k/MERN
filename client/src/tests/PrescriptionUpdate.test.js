import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import PrescriptionUpdate from "../pages/PrescriptionUpdate";
import { UserContext } from "../context/UserProvider";
import { MemoryRouter } from "react-router-dom";
import Router from "react-router";

jest.mock("axios"); // Mock the axios module
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

describe("prescription update", () => {
  it("gets data from api", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      name: "Abilify",
      usage: "Treating schizophrenia and bipolar disorder",
      sideEffects: ["Nausea", "Weight gain", "Restlessness"],
    };

    await axios.get.mockResolvedValue({ data: mockedData }); // Mock the axios.get function

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <PrescriptionUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const prescriptionNameInput = await screen.findByRole("textbox", {
      name: /name/i,
    });
    const usageInput = await screen.findByRole("textbox", {
      name: /usage/i,
    });
    const sideEffectsInput = await screen.findByRole("textbox", {
      name: /side effect \(to add more, use commas\)/i,
    });

    expect(prescriptionNameInput.value).toBe(mockedData.name);
    expect(usageInput.value).toBe(mockedData.usage);
    expect(sideEffectsInput.value.split(",")).toStrictEqual(
      mockedData.sideEffects
    );
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8080/prescription/${mockedData._id}/update`,
      { headers: { Authorization: `Bearer ${tokenInstance.token}` } }
    );
  });

  it("should submit the form with updated values", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      name: "Abilify",
      usage: "Treating schizophrenia and bipolar disorder",
      sideEffects: ["Nausea", "Weight gain", "Restlessness"],
    };

    await axios.get.mockResolvedValue({ data: mockedData });
    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <PrescriptionUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const prescriptionNameInput = await screen.findByRole("textbox", {
      name: /name/i,
    });
    const usageInput = await screen.findByRole("textbox", {
      name: /usage/i,
    });
    const sideEffectsInput = await screen.findByRole("textbox", {
      name: /side effect \(to add more, use commas\)/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      _id: "1",
      name: "Abilify NEW",
      usage: "Treating schizophrenia and bipolar disorder NEW",
      sideEffects: ["Nausea", "Weight gain", "Restlessness", "NEW"],
    };

    fireEvent.change(prescriptionNameInput, {
      target: { value: mockedNewData.name },
    });
    fireEvent.change(usageInput, {
      target: { value: mockedNewData.usage },
    });
    fireEvent.change(sideEffectsInput, {
      target: { value: mockedNewData.sideEffects },
    });

    expect(prescriptionNameInput.value).toBe(mockedNewData.name);
    expect(usageInput.value).toBe(mockedNewData.usage);
    expect(sideEffectsInput.value.split(",")).toStrictEqual(
      mockedNewData.sideEffects
    );

    fireEvent.click(submitButton);
    expect(axios.put).toHaveBeenCalled();
  });
  it("should create an object with values", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: undefined });

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <PrescriptionUpdate method={"create"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const prescriptionNameInput = await screen.findByRole("textbox", {
      name: /name/i,
    });
    const usageInput = await screen.findByRole("textbox", {
      name: /usage/i,
    });
    const sideEffectsInput = await screen.findByRole("textbox", {
      name: /side effect \(to add more, use commas\)/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      _id: "1",
      name: "Abilify NEW",
      usage: "Treating schizophrenia and bipolar disorder NEW",
      sideEffects: ["Nausea", "Weight gain", "Restlessness", "NEW"],
    };

    fireEvent.change(prescriptionNameInput, {
      target: { value: mockedNewData.name },
    });
    fireEvent.change(usageInput, {
      target: { value: mockedNewData.usage },
    });
    fireEvent.change(sideEffectsInput, {
      target: { value: mockedNewData.sideEffects },
    });

    expect(prescriptionNameInput.value).toBe(mockedNewData.name);
    expect(usageInput.value).toBe(mockedNewData.usage);
    expect(sideEffectsInput.value.split(",")).toStrictEqual(
      mockedNewData.sideEffects
    );

    fireEvent.click(submitButton);
    expect(axios.post).toHaveBeenCalled();
  });
});
