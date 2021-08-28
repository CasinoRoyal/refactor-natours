import { createSelector, Selector } from 'reselect';

import { UserDataState } from './types';
import { ReducerStateType } from '../store/types';
import { AppStore } from '../store/store';


const getUserData: Selector<AppStore, ReducerStateType<UserDataState>> = (state) => state.user;

export const selectUserData = createSelector(
  getUserData,
  ({ data, isFetching, error }) => {
    return {
      data: data.user,
      isFetching: isFetching,
      error: error
    }
  }
);