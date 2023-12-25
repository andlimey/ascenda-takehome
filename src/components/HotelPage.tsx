import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Hotel } from "../types/Hotel";
import { fetchHotels } from "../api/hotelApi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

const HotelPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchHotels().then((data) => {
      const selectedHotel =
        data.find((hotel) => hotel.id === parseInt(id as string, 10)) ||
        ({} as Hotel);
      setHotel(selectedHotel);
    });
  }, []);

  return hotel === undefined ? (
    <CircularProgress />
  ) : (
    <Box p={3}>
      <Typography data-testid="hotel-title" variant="h4" gutterBottom>
        {hotel.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={hotel.photo}
          alt={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Rating: {hotel.rating}
          </Typography>
          <Typography variant="body1">Stars: {hotel.stars}</Typography>
          <Typography variant="body1">Address: {hotel.address}</Typography>
          <Typography variant="body1">Price: ${hotel.price}</Typography>
          <div dangerouslySetInnerHTML={{ __html: hotel.description }} />

          <Typography variant="h6" gutterBottom>
            Reviews
          </Typography>
          <TextField
            label="Search reviews"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            fullWidth
            sx={{ mb: 2 }}
          />
          {renderReviews()}
        </CardContent>
      </Card>
    </Box>
  );

  function renderReviews() {
    const filteredReviews = (hotel as Hotel).reviews.filter((review) =>
      review.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredReviews.length === 0) {
      return (
        <Typography variant="body1">
          No results found. Reset filters!
        </Typography>
      );
    }

    return filteredReviews.map((review, index) => (
      <Card data-testid="review" key={index} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">{review.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            By: {review.user.name} from {review.user.location}
          </Typography>
          <Typography variant="body2">User Rating: {review.rating}</Typography>
          <Typography variant="body2">{review.description}</Typography>
        </CardContent>
      </Card>
    ));
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }
};

export default HotelPage;
