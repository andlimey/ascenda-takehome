import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { mockHotelsData } from "../fixtures/mockHotelsData";

import HotelPage from "./HotelPage";
import { fetchHotels } from "../api/hotelApi";

jest.mock("../api/hotelApi");

describe("HotelPage Component", () => {
  beforeEach(() => {
    (fetchHotels as jest.Mock).mockResolvedValue(mockHotelsData);
  });

  test("Renders circular progress if hotel is undefined", () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/hotel/1"]}>
          <Routes>
            <Route path="/hotel/:id" element={<HotelPage />} />
          </Routes>
        </MemoryRouter>
      );
    });

    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();
  });

  test("Renders the component if the hotel is defined", async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/hotel/1"]}>
          <Routes>
            <Route path="/hotel/:id" element={<HotelPage />} />
          </Routes>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId("hotel-title")).toBeInTheDocument();
    });
  });

  test("Shows the full list of reviews if there are no search queries", async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/hotel/1"]}>
          <Routes>
            <Route path="/hotel/:id" element={<HotelPage />} />
          </Routes>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("review").length).toBeGreaterThan(0);
    });
  });

  test("Filters reviews based on the search query", async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={["/hotel/1"]}>
          <Routes>
            <Route path="/hotel/:id" element={<HotelPage />} />
          </Routes>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      const searchInput = screen.getByLabelText("Search reviews");
      userEvent.type(
        searchInput,
        "The women staff at fresh restaurant were unhelpful and unfriendly."
      );

      const filteredReviews = screen.getAllByText(
        /The women staff at fresh restaurant were unhelpful and unfriendly./i
      );
      expect(filteredReviews.length).toBe(1);
    });
  });
});
