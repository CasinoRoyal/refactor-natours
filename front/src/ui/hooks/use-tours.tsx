import { useQuery } from 'react-query';
import { useTourService } from '../../application/services/tour.service';
import { TourId, Tour } from '../../domains/tour.entity';
import { ErrorMessage } from '../../shared-kernel/types';

export function useTours() {
  const { getAllTours } = useTourService();
  const { isLoading, error, data } = useQuery<Tour[], ErrorMessage>(
    ['tours', 'all tours'],
    getAllTours,
  );

  return { isLoading, error, data };
}

export function useTour(tourId: TourId) {
  const { getTour } = useTourService();
  const { isLoading, error, data } = useQuery<Tour, ErrorMessage>(
    ['tours', tourId],
    () => getTour(tourId),
  );

  return { isLoading, error, data };
}

export function useCustomTours(endPoint: string) {
  const { getCheapestTours } = useTourService();
  const { isLoading, error, data } = useQuery<Tour[], ErrorMessage>(
    ['tours', endPoint],
    () => getCheapestTours(endPoint),
  );

  return { isLoading, error, data };
}
