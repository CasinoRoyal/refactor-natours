import { AuthenticationUseCase } from '../ports/in/authentication-use-case.port';
import { UserStorage } from '../ports/out/user-storage.port';
import { AuthenticateData, RegistrationData } from '../../domains/user.entity';
import { useUserStorage } from '../../adapters/storage/user-storage.adapter';
import { ErrorMessage } from '../../shared-kernel/types';
import { User } from '../../domains/user.entity';

export function useAuthentication(): AuthenticationUseCase {
  const userStorage: UserStorage = useUserStorage();

  async function auth(data: AuthenticateData) {
    const response = await userStorage.authUser(data);
    return response;
  }

  async function registrate(data: RegistrationData) {
    const response = await userStorage.createUser(data);
    return response;
  }

  async function exit(): Promise<void | ErrorMessage> {
    const response = await userStorage.logout();

    if (response) return response;
  }

  async function checkAuth(): Promise<User | ErrorMessage> {
    const response = await userStorage.checkAuth();
    return response;
  }

  return {
    auth,
    registrate,
    exit,
    checkAuth,
  };
}
