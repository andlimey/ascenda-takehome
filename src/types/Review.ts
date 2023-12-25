export interface Review {
  user: {
    name: string;
    location: string;
  };
  rating: number;
  title: string;
  description: string;
}
