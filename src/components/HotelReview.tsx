import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Review } from "../types/Review";

interface HotelReviewProps {
  review: Review;
}

const HotelReview: React.FC<HotelReviewProps> = ({ review }) => {
  return (
    <Card data-testid="review" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">{review.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          By: {review.user.name} from {review.user.location}
        </Typography>
        <Typography variant="body2">User Rating: {review.rating}</Typography>
        <Typography variant="body2">{review.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default HotelReview;
