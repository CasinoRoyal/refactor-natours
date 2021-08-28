import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './root-reducer';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});
const middlewares: Middleware[] = [logger, thunk];

export const store = createStore(reducer, applyMiddleware(...middlewares));

export type AppStore = ReturnType<typeof reducer>;