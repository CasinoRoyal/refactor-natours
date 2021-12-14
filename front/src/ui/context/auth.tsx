import { createContext, PropsWithChildren } from 'react';
import { useCheckAuth } from '../hooks/use-auth';
import { User } from '../../domains/user.entity';

type AuthContext = {
  data: User | undefined;
  isLoading: boolean;
  error: string | null;
};

const initialState = {
  data: undefined,
  isLoading: false,
  error: null,
};

export const authContext = createContext<AuthContext>(initialState);

export function AuthProvider(props: PropsWithChildren<unknown>) {
  const { data, error, isLoading } = useCheckAuth();

  return (
    <authContext.Provider value={{ data, error, isLoading }}>
      {props.children}
    </authContext.Provider>
  );
}
