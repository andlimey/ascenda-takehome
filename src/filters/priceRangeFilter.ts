import { Hotel } from "../types/Hotel";

export function priceRangeFilter(
  hotel: Hotel,
  minPrice: number | undefined,
  maxPrice: number | undefined
) {
  return minPrice !== undefined && maxPrice !== undefined
    ? hotel.price >= minPrice && hotel.price <= maxPrice
    : true;
}
