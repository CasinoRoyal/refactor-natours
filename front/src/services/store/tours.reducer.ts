import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { http } from '../http/http.adapter';
import { Tour, TourId } from '../../domains/tour.entity';

type ToursState = {
  tours: Tour[];
  currentTour: Tour | null;
  isLoading: boolean;
};

const initialState: ToursState = {
  tours: [],
  currentTour: null,
  isLoading: false,
};

type ThunkResponse = {
  data: {
    docs: Tour[];
  };
  status: string;
  [k: string]: any;
};

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const res = await http.get<ThunkResponse>('/tours');
  return res.data.data.docs;
});

const toursSlice = createSlice({
  name: 'tours',
  initialState: initialState,
  reducers: {
    pickTour(state, action: PayloadAction<TourId>) {
      const pickedTour = state.tours.find(({ id }) => id === action.payload);

      if (pickedTour) state.currentTour = pickedTour;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      });
  },
});

export const selectTours = (state: RootState): ToursState => state.tours;

export const { pickTour } = toursSlice.actions;

export default toursSlice.reducer;
