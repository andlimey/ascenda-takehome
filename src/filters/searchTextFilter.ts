import { Hotel } from "../types/Hotel";

export function searchTextFilter(hotel: Hotel, searchText: string) {
  return (
    searchText === "" ||
    hotel.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
