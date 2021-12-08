export type Review = {
  createdAt: number;
  id: number;
  rating: number;
  review: string;
  tour: number;
  user: {
    name: string;
    photo: string;
  };
};
