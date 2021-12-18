import { Tour, TourId } from '../../domains/tour.entity';
import { TourStorage } from '../../application/ports/out/tour-storage.port';
import { createStorageRequest } from '../../shared-kernel/factory';

export function useTourStorage(): TourStorage {
  const selectAll = () =>
    createStorageRequest<Tour[]>('/tours', { method: 'GET' });
  const selectOne = (tourId: TourId) =>
    createStorageRequest<Tour>(`/tours/${tourId}`, { method: 'GET' });
  const selectMany = (endPoint: string) =>
    createStorageRequest<Tour[]>(`/${endPoint}`, { method: 'GET' });

  return {
    selectAll,
    selectOne,
    selectMany,
  };
}
