import { Tour, TourId } from '../../../domains/tour.entity';

export type ErrorMessage = string;

export type TourStorageState = {
  tours: Tour[];
  currentTour: Tour | null;
  isLoading: boolean;
  errorMsg: ErrorMessage | null;
};

export type CurrentTourState = Omit<TourStorageState, 'tours'>;
export type ToursState = Omit<TourStorageState, 'currentTour'>;

export interface ITourStorage {
  selectAll(): Promise<Tour[] | ErrorMessage>;
  selectOne(tourId: TourId): Promise<Tour | ErrorMessage>;
}
