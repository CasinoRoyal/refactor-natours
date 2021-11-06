import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { useAuthentication } from '../../application/services/authentication.service';
import {
  User,
  AuthenticateData,
  RegistrationData,
} from '../../domains/user.entity';
import { UserStorageState } from '../../application/ports/out/user-storage.port';
import { ErrorMessage } from '../../shared-kernel/types';

const initialState: UserStorageState = {
  user: null,
  isAuth: false,
  isLoading: false,
  errorMsg: null,
};

const { checkAuth, registrate, auth, exit } = useAuthentication();

export const checkUser = createAsyncThunk<
  User,
  void,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>(
  'user/checkUser',
  async (_, store) => {
    const response = await checkAuth();

    if (typeof response === 'string') {
      return store.rejectWithValue(response);
    }

    return response;
  },
  {
    condition: (_, store) => {
      const { user } = store.getState().user;

      if (user) {
        return false;
      }

      return true;
    },
  },
);

export const signUp = createAsyncThunk<
  User,
  RegistrationData,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>(
  'user/signup',
  async (data, store) => {
    const response = await registrate(data);

    if (typeof response === 'string') {
      return store.rejectWithValue(response);
    }

    return response;
  },
  {
    condition: (_, store) => {
      const { user } = store.getState().user;

      if (user) {
        return false;
      }

      return true;
    },
  },
);

export const signIn = createAsyncThunk<
  User,
  AuthenticateData,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>(
  'user/signin',
  async (data, store) => {
    const response = await auth(data);

    if (typeof response === 'string') {
      return store.rejectWithValue(response);
    }

    return response;
  },
  {
    condition: (_, store) => {
      const { user } = store.getState().user;

      if (user) {
        return false;
      }

      return true;
    },
  },
);

export const signOut = createAsyncThunk<
  boolean,
  void,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>('user/signout', async (_, store) => {
  const response = await exit();

  if (typeof response === 'string') {
    return store.rejectWithValue(response);
  }

  return true;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.errorMsg = action.payload;
        else state.errorMsg = 'Unknown error';
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
        state.errorMsg = null;
      });

    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.errorMsg = action.payload;
        else state.errorMsg = 'Unknown error';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
        state.errorMsg = null;
      });

    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.errorMsg = action.payload;
        else state.errorMsg = 'Unknown error';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
        state.errorMsg = null;
      });

    builder
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.errorMsg = action.payload;
        else state.errorMsg = 'Unknown error';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = null;
        state.errorMsg = null;
      });
  },
});

export default userSlice.reducer;
