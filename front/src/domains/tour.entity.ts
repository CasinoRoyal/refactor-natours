import { User } from './user.entity';

export type TourId = string;
export type TourTitle = string;
type Difficulty = 'easy' | 'medium' | 'difficult';

type Location = {
  type: string;
  description: string;
  coordinates: number[];
  address: string;
};

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

export type CardTour = Omit<Tour, 'reviews'>;

export interface ITour {
  readonly id: TourId;
  readonly startLocation: Location;
  readonly images: string[];
  readonly startDates: string[]; //or Date
  readonly createdAt: string; //or Date
  readonly guides: User[];
  readonly ratingsAverage: number;
  readonly ratingsQuantity: number;
  readonly name: string;
  readonly duration: number;
  readonly maxGroupSize: number;
  readonly difficulty: Difficulty;
  readonly price: number;
  readonly summary: string;
  readonly description: string;
  readonly imageCover: string;
  readonly locations: Location & { _id: number; day: number }[];
  readonly slug: TourTitle;
}

export class Tour implements ITour {
  constructor(
    readonly id: TourId,
    readonly startLocation: Location,
    readonly images: string[],
    readonly startDates: string[], //or Date
    readonly createdAt: string, //or Date
    readonly guides: User[],
    readonly ratingsAverage: number,
    readonly ratingsQuantity: number,
    readonly name: string,
    readonly duration: number,
    readonly maxGroupSize: number,
    readonly difficulty: Difficulty,
    readonly price: number,
    readonly summary: string,
    readonly description: string,
    readonly imageCover: string,
    readonly locations: Location & { _id: number; day: number }[],
    readonly slug: TourTitle,
    readonly reviews: Review[],
  ) {}

  /*  get availableSeats(): number {
    return this._availableQuantity;
  }

  isAvailableSeats(numberOfParticipants: number): boolean {
    return numberOfParticipants >= this._availableQuantity;
  }

  calculateTourPrice(numberOfParticipants: number): number {
    return this.price * numberOfParticipants;
  }*/
}
