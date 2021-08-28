import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentTourAsync } from '../actions';
import { CurrentTourDataState } from '../types';
import { getCurrentTourData } from '../selectors';
import { ReducerStateType } from '../../store/types';
import { AppStore } from '../../store/store';


export const useCurrentTourFetch = (id: string): ReducerStateType<CurrentTourDataState> => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<AppStore, ReducerStateType<CurrentTourDataState>>(getCurrentTourData);

  useEffect(() => {
    dispatch(fetchCurrentTourAsync(id));
  }, [dispatch, id]);

  return {
    data, 
    isFetching, 
    error
  };
}