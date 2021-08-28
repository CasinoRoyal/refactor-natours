import { createSelector, Selector } from 'reselect';

import { AppStore } from '../store/store';
import { ToursState } from './tour-reducer'

const getToursData: Selector<AppStore, ToursState> = (state) => state.tours;

export const getAllToursData = createSelector(
  getToursData,
  (toursData) => ({ 
    data: toursData.data.tours,
    isFetching: toursData.isFetching,
    error: toursData.error
  })
);

export const getCurrentTourData = createSelector(
  getToursData,
  (toursData) => ({ 
    data: toursData.data.currentTour,
    isFetching: toursData.isFetching,
    error: toursData.error
  })
);