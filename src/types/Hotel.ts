import { Review } from "./Review";

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  price: number;
  description: string;
  reviews: Review[];
}
