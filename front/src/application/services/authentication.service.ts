import { AuthenticationUseCase } from '../ports/in/authentication-use-case.port';
import { UserStorage } from '../ports/out/user-storage.port';
import { AuthenticateData, RegistrationData } from '../../domains/user.entity';
import { useUserStorage } from '../../adapters/storage/user-storage.adapter';
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

  async function exit(): Promise<void> {
    try {
      await userStorage.logout();
    } catch {
      throw new Error('logout error');
    }
  }

  async function checkAuth(): Promise<User> {
    try {
      const response = await userStorage.checkAuth();
      return response;
    } catch (err) {
      throw err;
    }
  }

  return {
    auth,
    registrate,
    exit,
    checkAuth,
  };
}
