import { priceSort } from "./priceSort";
import { mockHotelsData } from "../fixtures/mockHotelsData";

describe("priceSort", () => {
  it("should sort hotels by price in ascending order", () => {
    const sortedHotels = priceSort(mockHotelsData, "asc");
    const prices = sortedHotels.map((hotel) => hotel.price);

    expect(prices).toEqual(prices.slice().sort((a, b) => a - b));
  });

  it("should sort hotels by price in descending order", () => {
    const sortedHotels = priceSort(mockHotelsData, "desc");
    const prices = sortedHotels.map((hotel) => hotel.price);

    expect(prices).toEqual(prices.slice().sort((a, b) => b - a));
  });

  it("should return hotels without sorting when sortOrder is empty", () => {
    const sortedHotels = priceSort(mockHotelsData, "");

    expect(sortedHotels).toEqual(mockHotelsData);
  });
});
