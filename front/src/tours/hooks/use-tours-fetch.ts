import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tours } from '../types';
import { getAllToursData } from '../selectors';
import { fetchToursAsync } from '../actions';
import { AppStore } from '../../store/store';
import { ReducerStateType } from '../../store/types';

export const useToursFetch = (): ReducerStateType<Tours> => {
  const dispatch = useDispatch();
  const { 
    data, 
    isFetching, 
    error
  } = useSelector<AppStore, ReducerStateType<Tours>>(getAllToursData);
  console.log('render use TOURS');
  useEffect(() => {

    if (data.length !==0) {
      return;
    };

    dispatch(fetchToursAsync())
  }, [dispatch, data]);

  return {
    data, 
    isFetching, 
    error
  };
};