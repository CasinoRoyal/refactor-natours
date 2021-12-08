import { TourId, Tour } from '../../../domains/tour.entity';
import { ErrorMessage } from '../../../shared-kernel/types';

export interface TourUseCase {
  getAllTours(): Promise<Tour[] | ErrorMessage>;
  getTour(tourId: TourId): Promise<Tour | ErrorMessage>;
  getCheapestTours(endPoint: string): Promise<Tour[] | ErrorMessage>;
}
