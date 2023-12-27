import { ratingsFilter } from "./ratingsFilter";
import { mockHotelData } from "../fixtures/mockHotelData";

describe("ratingsFilter", () => {
  test("Should return true if ratings array is empty", () => {
    expect(ratingsFilter(mockHotelData, [])).toBe(true);
  });

  test("Should return true if hotel rating is higher than some ratings in the array", () => {
    expect(ratingsFilter(mockHotelData, [7, 9])).toBe(true);
  });

  test("Should return false if hotel rating is lower than all ratings in the array", () => {
    expect(ratingsFilter(mockHotelData, [8, 9, 10])).toBe(false);
  });
});
