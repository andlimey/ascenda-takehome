import { Hotel } from "../types/Hotel";

export function starsFilter(hotel: Hotel, stars: number[]) {
  return stars.length === 0 || stars.includes(hotel.stars);
}
