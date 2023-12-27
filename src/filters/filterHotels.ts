import { Hotel } from "../types/Hotel";
import { HotelFilterOptions } from "../types/HotelFilterOptions";
import { starsFilter } from "./starsFilter";
import { priceRangeFilter } from "./priceRangeFilter";
import { searchTextFilter } from "./searchTextFilter";
import { ratingsFilter } from "./ratingsFilter";

export function filterHotels(hotels: Hotel[], filters: HotelFilterOptions) {
  return hotels.filter((hotel) => {
    return (
      starsFilter(hotel, filters.stars) &&
      priceRangeFilter(hotel, filters.minPrice, filters.maxPrice) &&
      searchTextFilter(hotel, filters.searchText) &&
      ratingsFilter(hotel, filters.ratings)
    );
  });
}
