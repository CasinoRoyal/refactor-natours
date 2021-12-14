import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAuthentication } from '../../application/services/authentication.service';
import {
  AuthenticateData,
  RegistrationData,
  User,
} from '../../domains/user.entity';
import { ErrorMessage } from '../../shared-kernel/types';

export function useSignIn() {
  const queryClient = useQueryClient();
  const { auth } = useAuthentication();
  const signUpMutation = useMutation<User, ErrorMessage, AuthenticateData>(
    (signInData) => auth(signInData),
    {
      onSuccess: () => queryClient.invalidateQueries('authentication'),
    },
  );

  return signUpMutation;
}

export function useSignUp() {
  const queryClient = useQueryClient();
  const { registrate } = useAuthentication();
  const signInMutation = useMutation<User, ErrorMessage, RegistrationData>(
    (signUpData) => registrate(signUpData),
    {
      onSuccess: () => queryClient.invalidateQueries('authentication'),
    },
  );

  return signInMutation;
}

export function useSignOut() {
  const queryClient = useQueryClient();
  const { exit } = useAuthentication();
  const signOutMutation = useMutation<void, ErrorMessage>(() => exit(), {
    onSuccess: () => queryClient.invalidateQueries('authentication'),
  });

  return signOutMutation;
}

export function useCheckAuth() {
  const { checkAuth } = useAuthentication();
  const { isLoading, error, data } = useQuery<User, ErrorMessage>(
    ['authentication', 'check-auth'],
    () => checkAuth(),
  );

  return { isLoading, error, data };
}
