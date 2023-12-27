import { starsFilter } from "./starsFilter";
import { mockHotelData } from "../fixtures/mockHotelData";

describe("starsFilter", () => {
  test("Should return true if stars array is empty", () => {
    expect(starsFilter(mockHotelData, [])).toBe(true);
  });

  test("Should return true if hotel stars are included in the stars array", () => {
    expect(starsFilter(mockHotelData, [4, 5])).toBe(true);
  });

  test("Should return false if hotel stars are not included in the stars array", () => {
    expect(starsFilter(mockHotelData, [1, 2, 3, 5])).toBe(false);
  });
});
