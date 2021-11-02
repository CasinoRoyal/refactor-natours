import { TourId, Tour } from '../../domains/tour.entity';
import { TourUseCase } from '../ports/in/tour-use-case.port';
import { ITourStorage, ErrorMessage } from '../ports/out/tour-storage.port';
import { useTourStorage } from '../../adapters/store/tour-storage.adapter';

export function useTourService(): TourUseCase {
  const storage: ITourStorage = useTourStorage();

  async function getAllTours(): Promise<Tour[] | ErrorMessage> {
    const tours = await storage.selectAll();
    return tours;
  }

  async function getTour(tourId: TourId): Promise<Tour | ErrorMessage> {
    const tour = await storage.selectOne(tourId);
    return tour;
  }

  return {
    getAllTours,
    getTour,
  };
}
