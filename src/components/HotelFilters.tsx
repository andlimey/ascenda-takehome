import React from "react";
import { HotelFilterOptions } from "../types/HotelFilterOptions";
import { SortOrder } from "../types/SortOrder";
import { HOTEL_RATINGS } from "../constants/HotelRatings";
import { HOTEL_STARS } from "../constants/HotelStars";

import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

interface HotelFiltersProps {
  filters: HotelFilterOptions;
  absolutePriceRange: number[];
  priceRange: number[];
  sortOrder: SortOrder;
  onFilterChange: (filters: HotelFilterOptions) => void;
  onSortOrderChange: (sortOrder: SortOrder) => void;
  onPriceChange: (event: Event, newValue: number | number[]) => void;
  clearFilters: () => void;
}

const HotelFilters: React.FC<HotelFiltersProps> = ({
  filters,
  absolutePriceRange,
  priceRange,
  sortOrder,
  onFilterChange,
  onSortOrderChange,
  onPriceChange,
  clearFilters,
}) => {
  return (
    <Box>
      {/* Filter hotels by Star Rating */}
      <Typography fontWeight="bold">Stars</Typography>
      {HOTEL_STARS.map((star) => (
        <FormControlLabel
          key={star}
          control={
            <Checkbox
              checked={filters.stars.includes(star)}
              onChange={(e) => {
                const updatedStars = e.target.checked
                  ? [...filters.stars, star]
                  : filters.stars.filter((star) => star !== star);
                onFilterChange({ ...filters, stars: updatedStars });
              }}
            />
          }
          label={`${star} Stars`}
        />
      ))}

      {/* Filter hotels by Price Range */}
      <Typography fontWeight="bold">Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        min={absolutePriceRange[0]}
        max={absolutePriceRange[1]}
        data-testid="price-slider"
      />

      {/* Filter hotels by Name (given a free-form text input) */}
      <TextField
        label="Search by name"
        value={filters.searchText}
        onChange={(e) =>
          onFilterChange({ ...filters, searchText: e.target.value })
        }
      />

      {/* Filter hotels by Review Rating */}
      <Typography fontWeight="bold">Ratings</Typography>
      {HOTEL_RATINGS.map((rating) => (
        <FormControlLabel
          key={rating}
          control={
            <Checkbox
              checked={filters.ratings.includes(rating)}
              onChange={(e) => {
                const updatedRatings = e.target.checked
                  ? [...filters.ratings, rating]
                  : filters.ratings.filter((r) => r !== rating);
                onFilterChange({ ...filters, ratings: updatedRatings });
              }}
            />
          }
          label={`${rating}+`}
        />
      ))}

      {/* Sort hotels by Price */}
      <Typography fontWeight="bold">Sort by price:</Typography>
      <RadioGroup
        data-testid="price-sort"
        row
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
      >
        <FormControlLabel value="" control={<Radio />} label="Clear" />
        <FormControlLabel value="asc" control={<Radio />} label="Low to High" />
        <FormControlLabel
          value="desc"
          control={<Radio />}
          label="High to Low"
        />
      </RadioGroup>

      <Button variant="outlined" onClick={clearFilters}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default HotelFilters;
