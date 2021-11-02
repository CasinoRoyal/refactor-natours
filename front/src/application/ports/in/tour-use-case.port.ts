import { TourId, Tour } from '../../../domains/tour.entity';
import { ErrorMessage } from '../out/tour-storage.port';

export interface TourUseCase {
  getAllTours(): Promise<Tour[] | ErrorMessage>;
  getTour(tourId: TourId): Promise<Tour | ErrorMessage>;
}
