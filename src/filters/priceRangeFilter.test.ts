import { priceRangeFilter } from "./priceRangeFilter";
import { mockHotelData } from "../fixtures/mockHotelData";

describe("priceRangeFilter", () => {
  test("Should return true if min and max prices are undefined", () => {
    expect(priceRangeFilter(mockHotelData, undefined, undefined)).toBe(true);
  });

  test("Should return true if hotel price is within the given range", () => {
    expect(priceRangeFilter(mockHotelData, 100, 200)).toBe(true);
  });

  test("Should return false if hotel price is below the min price", () => {
    expect(priceRangeFilter(mockHotelData, 200, 300)).toBe(false);
  });

  test("Should return false if hotel price is above the max price", () => {
    expect(priceRangeFilter(mockHotelData, 100, 110)).toBe(false);
  });

  test("Should return true if hotel price is equal to min price", () => {
    expect(priceRangeFilter(mockHotelData, 120, 200)).toBe(true);
  });

  test("Should return true if hotel price is equal to max price", () => {
    expect(priceRangeFilter(mockHotelData, 100, 120)).toBe(true);
  });
});
