import { TourId, Tour } from '../../domains/tour.entity';
import { TourUseCase } from '../ports/in/tour-use-case.port';
import { TourStorage } from '../ports/out/tour-storage.port';
import { useTourStorage } from '../../adapters/storage/tour-storage.adapter';

export function useTourService(): TourUseCase {
  const storage: TourStorage = useTourStorage();

  async function getAllTours(): Promise<Tour[]> {
    const tours = await storage.selectAll();
    return tours;
  }

  async function getTour(tourId: TourId): Promise<Tour> {
    const tour = await storage.selectOne(tourId);
    return tour;
  }

  async function getCheapestTours(endPoint: string): Promise<Tour[]> {
    const tours = await storage.selectMany(endPoint);
    return tours;
  }

  return {
    getAllTours,
    getTour,
    getCheapestTours,
  };
}
