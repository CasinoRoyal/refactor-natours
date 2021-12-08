import { Tour, TourId } from '../../../domains/tour.entity';
import { ErrorMessage } from '../../../shared-kernel/types';

export type TourStorageState = {
  tours: Tour[];
  currentTour: Tour | null;
};

export type CurrentTourState = Omit<TourStorageState, 'tours'>;
export type ToursState = Omit<TourStorageState, 'currentTour'>;

export interface TourStorage {
  selectAll(): Promise<Tour[] | ErrorMessage>;
  selectOne(tourId: TourId): Promise<Tour | ErrorMessage>;
  selectMany(endPoint: string): Promise<Tour[] | ErrorMessage>;
}
