import { useEffect } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  selectTours,
  Store,
} from '../store/store';
import {
  fetchTours,
  fetchTour,
  clearCurrentTour,
  clearTours,
  fetchCheapestTours,
} from '../store/tours.reducer';
import { TourStorageState } from '../../application/ports/out/tour-storage.port';

type TourType = {
  tourId?: string | undefined;
  endPoint?: string | undefined;
};

export function useTour({
  tourId = undefined,
  endPoint = undefined,
}: TourType = {}): Store<TourStorageState> {
  const tourState = useAppSelector(selectTours);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tourId || endPoint) return;

    dispatch(fetchTours());

    return () => {
      dispatch(clearTours());
    };
  }, [tourId, endPoint]);

  useEffect(() => {
    if (!tourId) return;

    dispatch(fetchTour(tourId));
    return () => {
      dispatch(clearCurrentTour());
    };
  }, [tourId]);

  useEffect(() => {
    if (!endPoint) return;

    dispatch(fetchCheapestTours(endPoint));

    return () => {
      dispatch(clearTours());
    };
  }, [endPoint]);

  return tourState;
}
