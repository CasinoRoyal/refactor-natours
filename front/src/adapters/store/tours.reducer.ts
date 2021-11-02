import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { useTourService } from '../../application/services/tour.service';
import { Tour, TourId } from '../../domains/tour.entity';
import {
  TourStorageState,
  ErrorMessage,
} from '../../application/ports/out/tour-storage.port';

const initialState: TourStorageState = {
  tours: [],
  currentTour: null,
  isLoading: false,
  errorMsg: null,
};

const { getAllTours, getTour } = useTourService();

export const fetchTours = createAsyncThunk<
  Tour[],
  void,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>(
  'tours/fetchTours',
  async (_, store) => {
    const response = await getAllTours();

    if (typeof response === 'string') {
      return store.rejectWithValue(response);
    }

    return response;
  },
  {
    condition: (_, store) => {
      const toursState = store.getState().tours;

      if (toursState.tours.length !== 0) {
        return false;
      }

      return true;
    },
  },
);

export const fetchTour = createAsyncThunk<
  Tour,
  TourId,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>(
  'tours/fetchTour',
  async (tourId, store) => {
    const response = await getTour(tourId);

    if (typeof response === 'string') {
      return store.rejectWithValue(response);
    }

    return response;
  },
  {
    condition: (_, store) => {
      const toursState = store.getState().tours;

      if (toursState.tours.length !== 0) {
        return false;
      }

      return true;
    },
  },
);

const toursSlice = createSlice({
  name: 'tours',
  initialState: initialState,
  reducers: {
    getTourFromStore: (state, action: PayloadAction<TourId>) => {
      const pickedTour = state.tours.find(({ id }) => id === action.payload);

      if (!pickedTour) {
        state.errorMsg = `Tour with id - ${action.payload} not found`;
        return state;
      }

      state.currentTour = pickedTour;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        if (!action.error.message) state.errorMsg = 'Server error';
        else state.errorMsg = action.error.message;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTour.rejected, (state, action) => {
        state.isLoading = false;
        if (!action.error.message) state.errorMsg = 'Server error';
        else state.errorMsg = action.error.message;
      })
      .addCase(fetchTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentTour = action.payload;
      });
  },
});

export const { getTourFromStore } = toursSlice.actions;

export default toursSlice.reducer;
