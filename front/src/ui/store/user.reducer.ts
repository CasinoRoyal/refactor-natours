import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, Store } from './store';
import { useAuthentication } from '../../application/services/authentication.service';
import { useUser } from '../../application/services/user.service';
import {
  User,
  AuthenticateData,
  RegistrationData,
  ChangeUserData,
} from '../../domains/user.entity';
import { UserStorageState } from '../../application/ports/out/user-storage.port';
import { ErrorMessage } from '../../shared-kernel/types';

const initialState: Store<UserStorageState> = {
  data: {
    user: null,
    isAuth: false,
  },
  isLoading: true,
  error: null,
};

const { checkAuth, registrate, auth, exit } = useAuthentication();
const { changeUserData } = useUser();

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
      const { data } = store.getState().user;

      if (data.user) {
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
      const { data } = store.getState().user;

      if (data.user) {
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
      const { data } = store.getState().user;

      if (data.user) {
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

export const updateUserData = createAsyncThunk<
  User,
  ChangeUserData,
  {
    state: RootState;
    rejectValue: ErrorMessage;
  }
>('user/update-user-data', async (data, store) => {
  const response = await changeUserData(data);

  if (typeof response === 'string') {
    return store.rejectWithValue(response);
  }

  return response;
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
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.isAuth = true;
        state.data.user = action.payload;
        state.error = null;
      });

    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.isAuth = true;
        state.data.user = action.payload;
        state.error = null;
      });

    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.isAuth = true;
        state.data.user = action.payload;
        state.error = null;
      });

    builder
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.data.isAuth = false;
        state.data.user = null;
        state.error = null;
      });

    builder
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
        else state.error = 'Unknown error';
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.isAuth = true;
        state.data.user = action.payload;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
