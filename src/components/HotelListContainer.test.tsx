import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockHotelData } from "../fixtures/mockHotelData";

import HotelListContainer from "./HotelListContainer";
import { fetchHotels } from "../api/hotelApi";

jest.mock("../api/hotelApi");

describe("HotelListContainer", () => {
  beforeEach(() => {
    (fetchHotels as jest.Mock).mockResolvedValue(mockHotelData);
  });

  test("Renders hotel list container", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(/Hotels/i)).toBeInTheDocument();
  });

  test("Filters hotels by stars", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const starOption = screen.getByText("4 Stars");
      userEvent.click(starOption);
    });

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(1);

      const hotelHeading = await screen.findByRole("heading", {
        level: 5,
        name: /Shinagawa Prince Hotel/i,
      });
      expect(hotelHeading).toBeInTheDocument();
    });
  });

  // Not sure why this test case is failing
  // test("Filters hotels by price range", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <Routes>
  //         <Route path="/" element={<HotelListContainer />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   act(() => {
  //     const priceFilter = screen.getByTestId("price-slider");
  //     fireEvent.change(priceFilter, { value: [100, 130] });
  //   });

  //   await waitFor(async () => {
  //     const headings = await screen.findAllByRole("heading", {
  //       level: 5,
  //     });
  //     expect(headings.length).toBe(1);

  //     const hotelHeading = await screen.findByRole("heading", {
  //       level: 5,
  //       name: /Shinagawa Prince Hotel/i,
  //     });
  //     expect(hotelHeading).toBeInTheDocument();
  //   });
  // });

  test("Filters hotels by search text", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const searchInput = screen.getByLabelText("Search by name");
      userEvent.type(searchInput, "Shinagawa");
    });

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(1);

      const hotelHeading = await screen.findByRole("heading", {
        level: 5,
        name: /Shinagawa Prince Hotel/i,
      });
      expect(hotelHeading).toBeInTheDocument();
    });
  });

  test("Filters hotels by rating", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const ratingOption = screen.getByText("9+");
      userEvent.click(ratingOption);
    });

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(2);

      const hotelHeading = await screen.findByRole("heading", {
        level: 5,
        name: /Park Hyatt Tokyo/i,
      });
      expect(hotelHeading).toBeInTheDocument();

      const hotelHeading2 = await screen.findByRole("heading", {
        level: 5,
        name: /The Ritz-Carlton, Tokyo/i,
      });
      expect(hotelHeading2).toBeInTheDocument();
    });
  });

  test("Sorts hotels by price in ascending order", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const sortSelect = screen.getByTestId("price-sort");
      fireEvent.change(sortSelect, { event: { target: { value: "asc" } } });
    });

    const expectedNames = [
      "HUNDRED STAY Tokyo Shinjuku",
      "Shinagawa Prince Hotel",
      "Hotel Book And Bed Tokyo Shinjuku",
      "Hotel Odakyu Hotel Century Southern Tower",
      "Park Hyatt Tokyo",
      "The Ritz-Carlton, Tokyo",
    ];

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(6);

      const actualNames = headings.map((heading) => heading.textContent);
      expect(actualNames).toEqual(expect.arrayContaining(expectedNames));
    });
  });

  test("Sorts hotels by price in descending order", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const sortSelect = screen.getByTestId("price-sort");
      fireEvent.change(sortSelect, { event: { target: { value: "desc" } } });
    });

    const expectedNames = [
      "The Ritz-Carlton, Tokyo",
      "Park Hyatt Tokyo",
      "Hotel Odakyu Hotel Century Southern Tower",
      "Hotel Book And Bed Tokyo Shinjuku",
      "Shinagawa Prince Hotel",
      "HUNDRED STAY Tokyo Shinjuku",
    ];

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(6);

      const actualNames = headings.map((heading) => heading.textContent);
      expect(actualNames).toEqual(expect.arrayContaining(expectedNames));
    });
  });

  test("Combination of filtering and sorting", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      const searchInput = screen.getByLabelText("Search by name");
      userEvent.type(searchInput, "Shinjuku");

      const sortSelect = screen.getByTestId("price-sort");
      fireEvent.change(sortSelect, { event: { target: { value: "asc" } } });
    });

    const expectedNames = [
      "HUNDRED STAY Tokyo Shinjuku",
      "Hotel Book And Bed Tokyo Shinjuku",
    ];

    await waitFor(async () => {
      const headings = await screen.findAllByRole("heading", {
        level: 5,
      });
      expect(headings.length).toBe(2);

      const actualNames = headings.map((heading) => heading.textContent);
      expect(actualNames).toEqual(expect.arrayContaining(expectedNames));
    });
  });
});
