import { http } from '../http/http.adapter';
import { UserStorage } from '../../application/ports/out/user-storage.port';
import {
  User,
  AuthenticateData,
  RegistrationData,
  ChangeUserData,
} from '../../domains/user.entity';
import { ErrorMessage, ServerResponse } from '../../shared-kernel/types';

export function useUserStorage(): UserStorage {
  async function createUser(
    data: RegistrationData,
  ): Promise<User | ErrorMessage> {
    try {
      const response = await http<
        ServerResponse<{ user: User }>,
        RegistrationData
      >('users/signup', { method: 'POST', data });

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data.user;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function authUser(
    data: AuthenticateData,
  ): Promise<User | ErrorMessage> {
    try {
      const response = await http<
        ServerResponse<{ user: User }>,
        AuthenticateData
      >(`users/login`, { method: 'POST', withCredentials: true, data });

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data.user;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function checkAuth(): Promise<User | ErrorMessage> {
    try {
      const response = await http<ServerResponse<{ user: User }>>(
        `users/check-auth`,
        { method: 'GET', withCredentials: true },
      );

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data.user;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function logout(): Promise<void | ErrorMessage> {
    try {
      const response = await http<
        ServerResponse<{ status: 'success' | 'error' }>
      >(`users/logout`, { method: 'GET' });

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function changeUserData(
    data: ChangeUserData,
  ): Promise<User | ErrorMessage> {
    try {
      const response = await http<
        ServerResponse<{ user: User }>,
        ChangeUserData
      >(`users/change-user-data`, { method: 'PATCH', data });

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data.user;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  return {
    createUser,
    authUser,
    logout,
    checkAuth,
    changeUserData,
  };
}
