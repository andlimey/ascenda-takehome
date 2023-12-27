import React from "react";
import { Hotel } from "../types/Hotel";
import HotelCard from "./HotelCard";
import NoResultsFoundMessage from "./NoResultsFoundMessage";
import Stack from "@mui/material/Stack";

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return hotels.length === 0 ? (
    <NoResultsFoundMessage />
  ) : (
    <Stack spacing={2}>
      {hotels.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </Stack>
  );
};

export default HotelList;
