import { searchTextFilter } from "./searchTextFilter";
import { mockHotelData } from "../fixtures/mockHotelData";

describe("searchTextFilter", () => {
  test("Should return true if searchText is empty", () => {
    expect(searchTextFilter(mockHotelData, "")).toBe(true);
  });

  test("Should return true if hotel name includes searchText (case insensitive)", () => {
    expect(searchTextFilter(mockHotelData, "Shinagawa")).toBe(true);
  });

  test("Should return false if hotel name does not include searchText", () => {
    expect(searchTextFilter(mockHotelData, "Not found")).toBe(false);
  });

  test("Should return true if searchText matches hotel name exactly (case insensitive)", () => {
    expect(searchTextFilter(mockHotelData, "shinagawa prince hotel")).toBe(
      true
    );
  });
});
