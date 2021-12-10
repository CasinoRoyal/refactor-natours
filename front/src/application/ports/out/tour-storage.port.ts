import { Tour, TourId } from '../../../domains/tour.entity';

export type TourStorageState = {
  tours: Tour[];
  currentTour: Tour | null;
};

export type CurrentTourState = Omit<TourStorageState, 'tours'>;
export type ToursState = Omit<TourStorageState, 'currentTour'>;

export interface TourStorage {
  selectAll(): Promise<Tour[]>;
  selectOne(tourId: TourId): Promise<Tour>;
  selectMany(endPoint: string): Promise<Tour[]>;
}
