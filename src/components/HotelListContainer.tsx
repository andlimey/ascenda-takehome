import React, { useState, useEffect } from "react";
import { fetchHotels } from "../api/hotelApi";
import { Hotel } from "../types/Hotel";
import { HotelFilterOptions } from "../types/HotelFilterOptions";
import { SortOrder } from "../types/SortOrder";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HotelList from "./HotelList";
import HotelFilters from "./HotelFilters";

const HotelListContainer: React.FC<{}> = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [filters, setFilters] = useState<HotelFilterOptions>({
    searchText: "",
    ratings: [],
    stars: [],
  } as HotelFilterOptions);
  const [absolutePriceRange, setAbsolutePriceRange] = useState<number[]>([
    0, 0,
  ]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]);
  const [sortOrder, setSortOrder] = useState<SortOrder>("");

  useEffect(() => {
    fetchHotels().then((data) => {
      setHotels(data);
      setFilteredHotels(data);

      const prices = data.map((hotel) => hotel.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setAbsolutePriceRange([minPrice, maxPrice]);
      setPriceRange([minPrice, maxPrice]);
    });
  }, []);

  useEffect(() => {
    let updatedHotels = [...hotels];

    if (filters.stars.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) => {
        return filters.stars.includes(hotel.stars);
      });
    }

    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      updatedHotels = updatedHotels.filter(
        (hotel) =>
          hotel.price >= filters.minPrice! && hotel.price <= filters.maxPrice!
      );
    }

    if (filters.searchText !== "") {
      updatedHotels = updatedHotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(filters.searchText.toLowerCase())
      );
    }

    if (filters.ratings.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) =>
        filters.ratings.some((rating) => hotel.rating >= rating)
      );
    }

    if (sortOrder !== "") {
      updatedHotels.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    setFilteredHotels(updatedHotels);
  }, [hotels, filters, sortOrder]);

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Hotels</Typography>

      <HotelFilters
        filters={filters}
        absolutePriceRange={absolutePriceRange}
        priceRange={priceRange}
        sortOrder={sortOrder}
        onFilterChange={setFilters}
        onSortOrderChange={setSortOrder}
        onPriceChange={handlePriceChange}
        clearFilters={clearFilters}
      />

      <HotelList hotels={filteredHotels} />
    </Stack>
  );

  function handlePriceChange(_event: Event, newValue: number | number[]) {
    setPriceRange(newValue as number[]);

    if (Array.isArray(newValue)) {
      setFilters({ ...filters, minPrice: newValue[0], maxPrice: newValue[1] });
    }
  }

  function clearFilters() {
    setFilters({ searchText: "", stars: [], ratings: [] });
    setFilteredHotels(hotels);
    setSortOrder("");
    setPriceRange(absolutePriceRange);
  }
};

export default HotelListContainer;
