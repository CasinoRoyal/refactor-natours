import { UserUseCase } from '../ports/in/user-use-case.port';
import { UserStorage } from '../ports/out/user-storage.port';
import { ChangeUserData } from '../../domains/user.entity';
import { useUserStorage } from '../../adapters/storage/user-storage.adapter';
import { User } from '../../domains/user.entity';

export function useUser(): UserUseCase {
  const userStorage: UserStorage = useUserStorage();

  async function changeUserData(data: ChangeUserData): Promise<User> {
    const response = await userStorage.changeUserData(data);
    return response;
  }

  return {
    changeUserData,
  };
}
