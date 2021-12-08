import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, Store } from './store';
import { useTourService } from '../../application/services/tour.service';
import { Tour, TourId } from '../../domains/tour.entity';
import { TourStorageState } from '../../application/ports/out/tour-storage.port';
import { ErrorMessage } from '../../shared-kernel/types';

const { getAllTours, getTour, getCheapestTours } = useTourService();

const initialState: Store<TourStorageState> = {
  data: {
    tours: [],
    currentTour: null,
  },
  isLoading: false,
  error: null,
};

// type thunkParametersType<T, A> = {
//   cb: (options?: A) => Promise<T>;
//   options?: A;
// };

// export const fetchTours = <T, A>() =>
//   createAsyncThunk<T, thunkParametersType<T, A>>(
//     'tours/fetchTours',
//     async ({ cb, options }, store) => {
//       const response = options ? await cb(options) : await cb();

//       if (typeof response === 'string') {
//         return store.rejectWithValue(response);
//       }

//       return response;
//     },
//   );

export const fetchTours = createAsyncThunk<
  Tour[],
  void,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>('tours/fetchTours', async (_, store) => {
  const response = await getAllTours();

  if (typeof response === 'string') {
    return store.rejectWithValue(response);
  }

  return response;
});

export const fetchTour = createAsyncThunk<
  Tour,
  TourId,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>('tours/fetchTour', async (tourId, store) => {
  const response = await getTour(tourId);

  if (typeof response === 'string') {
    return store.rejectWithValue(response);
  }

  return response;
});

export const fetchCheapestTours = createAsyncThunk<
  Tour[],
  string,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>('tours/fetchCheapestTours', async (endPoint, store) => {
  const response = await getCheapestTours(endPoint);

  if (typeof response === 'string') {
    return store.rejectWithValue(response);
  }

  return response;
});

const toursSlice = createSlice({
  name: 'tours',
  initialState: initialState,
  reducers: {
    getTourFromStore: (state, action: PayloadAction<TourId>) => {
      const pickedTour = state.data.tours.find(
        ({ id }) => id === action.payload,
      );

      if (!pickedTour) {
        state.error = `Tour with id - ${action.payload} not found`;
        return state;
      }

      state.data.currentTour = pickedTour;
      return state;
    },
    clearCurrentTour: (state) => {
      state.data.currentTour = null;
    },
    clearTours: (state) => {
      state.data.tours = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.tours = action.payload;
        state.error = null;
      })
      .addCase(fetchTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTour.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(fetchTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.currentTour = action.payload;
        state.error = null;
      })
      .addCase(fetchCheapestTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCheapestTours.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(fetchCheapestTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.tours = action.payload;
        state.error = null;
      });
  },
});

export const { getTourFromStore, clearCurrentTour, clearTours } =
  toursSlice.actions;

export default toursSlice.reducer;
