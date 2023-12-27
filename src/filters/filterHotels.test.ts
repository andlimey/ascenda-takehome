import { filterHotels } from "./filterHotels";
import { mockHotelsData } from "../fixtures/mockHotelsData";
import { HotelFilterOptions } from "../types/HotelFilterOptions";

describe("filterHotels", () => {
  it("should return all hotels if no filters are provided", () => {
    const filters: HotelFilterOptions = {
      ratings: [],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(filteredHotels).toHaveLength(mockHotelsData.length);
  });

  it("should filter hotels by stars", () => {
    const filters: HotelFilterOptions = {
      ratings: [],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "",
      stars: [5],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(filteredHotels.every((hotel) => hotel.stars === 5)).toBe(true);
  });

  it("should filter hotels by price range", () => {
    const filters: HotelFilterOptions = {
      ratings: [],
      minPrice: 100,
      maxPrice: 200,
      searchText: "",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(
      filteredHotels.every((hotel) => hotel.price >= 100 && hotel.price <= 200)
    ).toBe(true);
  });

  it("should filter hotels by search text", () => {
    const filters: HotelFilterOptions = {
      ratings: [],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "Ritz-Carlton",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(
      filteredHotels.every((hotel) =>
        hotel.name.toLowerCase().includes("ritz-carlton")
      )
    ).toBe(true);
  });

  it("should filter hotels by ratings", () => {
    const filters: HotelFilterOptions = {
      ratings: [5],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(filteredHotels.every((hotel) => hotel.rating >= 5)).toBe(true);
  });

  it("should show hotels that meet all given conditions", () => {
    const filters: HotelFilterOptions = {
      ratings: [7],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "Shinagawa Prince Hotel",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(filteredHotels.length).toBeGreaterThan(0);
    expect(
      filteredHotels.every(
        (hotel) =>
          hotel.name.toLowerCase().includes("shinagawa prince hotel") &&
          hotel.rating >= 7
      )
    ).toBe(true);
  });

  it("should be an empty array if no hotels meet any filter conditions", () => {
    const filters: HotelFilterOptions = {
      ratings: [9],
      minPrice: undefined,
      maxPrice: undefined,
      searchText: "Shinagawa Prince Hotel",
      stars: [],
    };
    const filteredHotels = filterHotels(mockHotelsData, filters);
    expect(filteredHotels.length).toBe(0);
  });
});
