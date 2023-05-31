import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import VisitationUpdate from "../pages/VisitationUpdate";
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
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      occurredDate: "2025-06-28T10:25:00Z",
      note: "Routine check-up.",
      prescription: ["123"],
    };

    const mockedPrescriptions = [
      { _id: "123", name: "Abilify" },
      { _id: "456", name: "Adderall" },
    ];

    await axios.get.mockResolvedValueOnce({ data: mockedData }); // Mock the axios.get function
    await axios.get.mockResolvedValueOnce({ data: mockedPrescriptions });

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <VisitationUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      const dateInput = screen.getByLabelText("Occurred Date");
      expect(dateInput.value).toBe(mockedData.occurredDate);
    });
    expect(
      screen.getByRole("textbox", {
        name: /note/i,
      })
    ).toHaveValue(mockedData.note);
    expect(
      screen.getByRole("checkbox", {
        name: /abilify/i,
      })
    ).toBeChecked();

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(`/visitation/${mockedData._id}/update`),
      expect.any(Object)
    );

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("/prescription/list"),
      expect.any(Object)
    );
  });

  it("fills out boxes correctly", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    const mockedData = {
      _id: "1",
      occurredDate: "2025-06-28T10:25:00Z",
      note: "Routine check-up.",
      prescription: ["123"],
    };

    const mockedPrescriptions = [
      { _id: "123", name: "Abilify" },
      { _id: "456", name: "Adderall" },
    ];

    await axios.get.mockResolvedValueOnce({ data: mockedData }); // Mock the axios.get function
    await axios.get.mockResolvedValueOnce({ data: mockedPrescriptions });

    const tokenInstance = { token: "mockToken" };

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ tokenInstance }}>
          <VisitationUpdate method={"update"} />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const noteInput = await screen.findByRole("textbox", {
      name: /note/i,
    });
    const prescriptionInput = await screen.findByRole("checkbox", {
      name: /abilify/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /submit/i,
    });

    const mockedNewData = {
      _id: "1",
      occurredDate: "2025-06-28T10:25:00Z",
      note: "Routine check-up. NEW",
      prescription: ["123", "456"],
    };

    fireEvent.change(noteInput, {
      target: { value: mockedNewData.note },
    });
    fireEvent.change(prescriptionInput, {
      target: { value: mockedNewData.prescription },
    });

    expect(noteInput.value).toBe(mockedNewData.note);
    expect(prescriptionInput.value.split(",")).toStrictEqual(
      mockedNewData.prescription
    );

    fireEvent.click(submitButton);
    expect(axios.put).toHaveBeenCalled();
  });
});
