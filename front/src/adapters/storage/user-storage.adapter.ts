import { UserStorage } from '../../application/ports/out/user-storage.port';
import {
  User,
  AuthenticateData,
  RegistrationData,
  ChangeUserData,
} from '../../domains/user.entity';
import { createStorageRequest } from '../../shared-kernel/factory';

export function useUserStorage(): UserStorage {
  // async function createUser(
  //   data: RegistrationData,
  // ): Promise<User | ErrorMessage> {
  //   try {
  //     const response = await http<ServerResponse<User>, RegistrationData>(
  //       'users/signup',
  //       { method: 'POST', data },
  //     );

  //     if (response.data.status !== 'success') {
  //       return response.data.message || 'server error';
  //     }

  //     return response.data.data as User;
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return err.message as ErrorMessage;
  //     }
  //     return 'Server Error';
  //   }
  // }

  // async function authUser(
  //   data: AuthenticateData,
  // ): Promise<User | ErrorMessage> {
  //   try {
  //     const response = await http<ServerResponse<User>, AuthenticateData>(
  //       `users/login`,
  //       { method: 'POST', withCredentials: true, data },
  //     );

  //     if (response.data.status !== 'success') {
  //       return response.data.message || 'server error';
  //     }

  //     return response.data.data as User;
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return err.message as ErrorMessage;
  //     }
  //     return 'Server Error';
  //   }
  // }

  // async function checkAuth(): Promise<User | ErrorMessage> {
  //   try {
  //     const response = await http<ServerResponse<User>>(`users/check-auth`, {
  //       method: 'GET',
  //       withCredentials: true,
  //     });

  //     if (response.data.status !== 'success') {
  //       return response.data.message || 'server error';
  //     }

  //     return response.data.data as User;
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return err.message as ErrorMessage;
  //     }
  //     return 'Server Error';
  //   }
  // }

  // async function logout(): Promise<void | ErrorMessage> {
  //   try {
  //     const response = await http<
  //       ServerResponse<{ status: 'success' | 'error' }>
  //     >(`users/logout`, { method: 'GET' });

  //     if (response.data.status !== 'success') {
  //       return response.data.message || 'server error';
  //     }
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return err.message as ErrorMessage;
  //     }
  //     return 'Server Error';
  //   }
  // }

  // async function changeUserData(
  //   data: ChangeUserData,
  // ): Promise<User | ErrorMessage> {
  //   try {
  //     const response = await http<ServerResponse<User>, ChangeUserData>(
  //       `users/change-user-data`,
  //       { method: 'PATCH', data },
  //     );

  //     if (response.data.status !== 'success') {
  //       return response.data.message || 'server error';
  //     }

  //     return response.data.data as User;
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       return err.message as ErrorMessage;
  //     }
  //     return 'Server Error';
  //   }
  // }
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
