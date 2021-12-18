import { UserStorage } from '../../application/ports/out/user-storage.port';
import {
  User,
  AuthenticateData,
  RegistrationData,
  ChangeUserData,
} from '../../domains/user.entity';
import { createStorageRequest } from '../../shared-kernel/factory';

export function useUserStorage(): UserStorage {
  const createUser = (data: RegistrationData) =>
    createStorageRequest<User, RegistrationData>('users/signup', {
      method: 'POST',
      data,
    });

  const authUser = (data: AuthenticateData) =>
    createStorageRequest<User, AuthenticateData>('users/login', {
      method: 'POST',
      withCredentials: true,
      data,
    });

  const logout = () => createStorageRequest(`users/logout`, { method: 'GET' });

  const checkAuth = () =>
    createStorageRequest<User>('users/check-auth', {
      method: 'GET',
      withCredentials: true,
    });

  const changeUserData = (data: ChangeUserData) =>
    createStorageRequest<User, ChangeUserData>(`users/change-user-data`, {
      method: 'PATCH',
      data,
    });

  return {
    createUser,
    authUser,
    logout,
    checkAuth,
    changeUserData,
  };
}
