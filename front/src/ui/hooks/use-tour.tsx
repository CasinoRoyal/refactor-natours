import { useEffect } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  selectTours,
} from '../../adapters/store/store';
import { fetchTours } from '../../adapters/store/tours.reducer';
import { TourStorageState } from '../../application/ports/out/tour-storage.port';

export function useTours(): TourStorageState {
  const tourState = useAppSelector(selectTours);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchTour(id));
  //   }
  // }, [id]);

  return tourState;
}
