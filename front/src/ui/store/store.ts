import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tourReducer from './tours.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import { UserStorageState } from '../../application/ports/out/user-storage.port';
import { TourStorageState } from '../../application/ports/out/tour-storage.port';

export const store = configureStore({
  reducer: {
    tours: tourReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
// eslint-disable-next-line
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectTours = (state: RootState): TourStorageState => state.tours;
export const selectUser = (state: RootState): UserStorageState => state.user;
