import { combineReducers } from 'redux';

import { tourReducer as tours } from '../tours/tour-reducer';
import { userReducer as user } from '../user/user-reducer';
import { ReducerStateType } from './types';

type ReducersType = {
  tours: ReducerStateType<any>;
  user: ReducerStateType<any>;
}

export const reducer = combineReducers<ReducersType>({
  tours,
  user
});