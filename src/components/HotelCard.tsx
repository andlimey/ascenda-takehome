import React from "react";
import { Link } from "react-router-dom";
import { Hotel } from "../types/Hotel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./HotelCard.css";

export const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <Link to={`/hotel/${hotel.id}`} className="hotel-link">
      <Card sx={{ maxWidth: 900 }}>
        <CardMedia
          component="img"
          height="500"
          image={hotel.photo}
          alt={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {hotel.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stars: {hotel.stars}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {hotel.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {hotel.price}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: hotel.description }} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default HotelCard;
