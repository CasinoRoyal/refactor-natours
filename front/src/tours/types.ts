import { User } from '../user/types';

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
    name: string,
    photo: string
  }
};

export type Tour = {
  id: number;
  startLocation: Location;
  images: string[];
  startDates: string[]; //or Date
  createdAt: string; //or Date
  guides: User[];
  ratingsAverage: number;
  ratingsQuantity: number;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Location & {_id: number, day: number}[];
  slug: string;
};


export type Tours = Tour[];

export type CurrentTour = Tour & {reviews: Review[]};

export type CurrentTourDataState = CurrentTour | null;

export type ToursDataState = {
  tours: Tours;
  currentTour: CurrentTourDataState;
}


// redux types
// actions TOURS types 
export const FETCH_TOURS_START = 'FETCH_TOURS_START';
type FetchToursStartAction = {
  type: typeof FETCH_TOURS_START;
}

export const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
type FetchToursSuccessAction = {
  type: typeof FETCH_TOURS_SUCCESS;
  payload: Tours;
}

export const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';
type FetchToursFailureAction = {
  type: typeof FETCH_TOURS_FAILURE;
  payload: string; // Must be an ErrorMessageType or ErrorCodeType
}

export type ToursActionTypes = 
  | FetchToursStartAction
  | FetchToursSuccessAction
  | FetchToursFailureAction;

// actions TOUR types
export const FETCH_CURRENT_TOUR_START = 'FETCH_CURRENT_TOUR_START';
type FetchCurrentTourStartAction = {
  type: typeof FETCH_CURRENT_TOUR_START;
}

export const FETCH_CURRENT_TOUR_SUCCESS = 'FETCH_CURRENT_TOUR_SUCCESS';
type FetchCurrentTourSuccessAction = {
  type: typeof FETCH_CURRENT_TOUR_SUCCESS;
  payload: CurrentTour;
}

export const FETCH_CURRENT_TOUR_FAILURE = 'FETCH_CURRENT_TOUR_FAILURE';
type FetchCurrentTourFailureAction = {
  type: typeof FETCH_CURRENT_TOUR_FAILURE;
  payload: string; // Must be an ErrorMessageType or ErrorCodeType
}

export const CLEAR_CURRENT_TOUR = 'CLEAR_CURRENT_TOURE';
type ClearCurrentTourAction = {
  type: typeof CLEAR_CURRENT_TOUR;
}

export type CurrentTourActionTypes = 
  | FetchCurrentTourStartAction
  | FetchCurrentTourSuccessAction
  | FetchCurrentTourFailureAction
  | ClearCurrentTourAction;