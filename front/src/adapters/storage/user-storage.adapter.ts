import { http } from '../http/http.adapter';
import { UserStorage } from '../../application/ports/out/user-storage.port';
import {
  User,
  AuthenticateData,
  RegistrationData,
} from '../../domains/user.entity';
import { ErrorMessage, ServerResponse } from '../../shared-kernel/types';

export function useUserStorage(): UserStorage {
  async function createUser(
    data: RegistrationData,
  ): Promise<User | ErrorMessage> {
    try {
      const response = await http.post<RegistrationData, ServerResponse<User>>(
        'users/signup',
        data,
      );

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data;
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
      const response = await http.post<AuthenticateData, ServerResponse<User>>(
        `users/login`,
        data,
      );

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function checkAuth(): Promise<User | ErrorMessage> {
    try {
      const response = await http.get<ServerResponse<User>>(`users/check-auth`);

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
      }

      return response.data.data;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function logout(): Promise<void | ErrorMessage> {
    try {
      const response = await http.get<
        ServerResponse<{ status: 'success' | 'error' }>
      >(`users/logout`);

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

  return {
    createUser,
    authUser,
    logout,
    checkAuth,
  };
}
