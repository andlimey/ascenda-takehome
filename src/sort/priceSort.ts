import { Hotel } from "../types/Hotel";
import { SortOrder } from "../types/SortOrder";

export function priceSort(hotels: Hotel[], sortOrder: SortOrder) {
  if (sortOrder === "") {
    return hotels;
  }

  return hotels.slice().sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });
}
