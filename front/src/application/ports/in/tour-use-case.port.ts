import { TourId, Tour } from '../../../domains/tour.entity';

export interface TourUseCase {
  getAllTours(): Promise<Tour[]>;
  getTour(tourId: TourId): Promise<Tour>;
  getCheapestTours(endPoint: string): Promise<Tour[]>;
}
