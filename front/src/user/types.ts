export type User = {
  _id: number;
  role: string;
  active: boolean;
  name: string;
  email: string;
  photo: string;
  password: number | string;
};

export type UserData = User | null;

export type UserDataState = {
  user: UserData
};

export type AuthFormData = {
  email: string;
  password: string;
  username?: string;
  passwordConfirm?: string;
};

export type ChangeDataType = {
  name: string;
  email: string;
};

export type ChangePasswordType = {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
};

// redux types
export const REQUEST_LOGIN_USER = 'REQUEST_LOGIN_USER';
type requestLoginUserAction = {
  type: typeof REQUEST_LOGIN_USER
}

export const REQUEST_SIGNUP_USER = 'REQUEST_SIGNUP_USER';
type requestSignupUserAction = {
  type: typeof REQUEST_SIGNUP_USER
}


export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
type fetchUserSuccessAction = {
  type: typeof FETCH_USER_SUCCESS,
  payload: User
}

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
type fetchUserFailureAction = {
  type: typeof FETCH_USER_FAILURE,
  payload: string
}

export const CHECK_USER_START = 'CHECK_USER_START';
type checkUserStartAction = {
  type: typeof CHECK_USER_START
}

export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
type checkUserSuccessAction = {
  type: typeof CHECK_USER_SUCCESS
}

export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE';
type checkUserFailureAction = {
  type: typeof CHECK_USER_FAILURE
}

export const UPDATE_USER_DATA_START = 'UPDATE_USER_DATA_START';
type updateUserDataStartAction = {
  type: typeof UPDATE_USER_DATA_START
}

export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
type updateUserDataSuccessAction = {
  type: typeof UPDATE_USER_DATA_SUCCESS,
  payload: User
}

export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE';
type updateUserDataFailureAction = {
  type: typeof UPDATE_USER_DATA_FAILURE,
  payload: string
}

export type UserActionsType = 
  | requestLoginUserAction
  | requestSignupUserAction
  | fetchUserSuccessAction
  | fetchUserFailureAction
  | checkUserStartAction
  | checkUserSuccessAction
  | checkUserFailureAction
  | updateUserDataStartAction
  | updateUserDataFailureAction
  | updateUserDataSuccessAction;