import { Hotel } from "../types/Hotel";

export function ratingsFilter(hotel: Hotel, ratings: number[]) {
  return (
    ratings.length === 0 || ratings.some((rating) => hotel.rating >= rating)
  );
}
