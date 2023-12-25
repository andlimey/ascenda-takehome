import React from "react";
import { HotelFilterOptions } from "../types/HotelFilterOptions";
import { SortOrder } from "../types/SortOrder";

import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
    <>
      {/* Filter hotels by Star Rating */}
      <Typography>Stars</Typography>
      <Select
        multiple
        value={filters.stars}
        onChange={(e) =>
          onFilterChange({ ...filters, stars: e.target.value as number[] })
        }
        renderValue={(selected) => (selected as number[]).join(", ")}
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <MenuItem key={rating} value={rating}>
            <Typography variant="body2">{`${rating} Stars`}</Typography>
          </MenuItem>
        ))}
      </Select>

      {/* Filter hotels by Price Range */}
      <Typography id="price-range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        min={absolutePriceRange[0]}
        max={absolutePriceRange[1]}
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
      <Typography>Ratings</Typography>
      <Select
        multiple
        value={filters.ratings}
        onChange={(e) =>
          onFilterChange({ ...filters, ratings: e.target.value as number[] })
        }
        renderValue={(selected) => (selected as number[]).join(", ")}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
          <MenuItem key={rating} value={rating}>
            <Typography variant="body2">{`${rating}+`}</Typography>
          </MenuItem>
        ))}
      </Select>

      {/* Sort hotels by Price */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body1">Sort by price:</Typography>
        <Select
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
        >
          <MenuItem value="">Clear</MenuItem>
          <MenuItem value="asc">Low to High</MenuItem>
          <MenuItem value="desc">High to Low</MenuItem>
        </Select>
      </Stack>

      <Button variant="outlined" onClick={clearFilters}>
        Clear Filters
      </Button>
    </>
  );
};

export default HotelFilters;
