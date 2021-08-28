export type ReducerStateType<T> = {
  data: T;
  isFetching: boolean;
  error: boolean
};