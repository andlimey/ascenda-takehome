import React, { useState, useEffect } from "react";
import { fetchHotels } from "../api/hotelApi";
import { Hotel } from "../types/Hotel";
import { HotelFilterOptions } from "../types/HotelFilterOptions";
import { SortOrder } from "../types/SortOrder";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HotelList from "./HotelList";
import HotelFilters from "./HotelFilters";
import { filterHotels } from "../filters/filterHotels";
import { priceSort } from "../sort/priceSort";

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
    const filteredHotels = filterHotels(hotels, filters);
    const sortedHotels = priceSort(filteredHotels, sortOrder);

    setFilteredHotels(sortedHotels);
  }, [hotels, filters, sortOrder]);

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={4}>
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
      </Grid>
      <Grid item xs={8}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h2">Hotels</Typography>
          <HotelList hotels={filteredHotels} />
        </Stack>
      </Grid>
    </Grid>
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
