import {
  User,
  RegistrationData,
  AuthenticateData,
  ChangeUserData,
} from '../../../domains/user.entity';
import { ErrorMessage } from '../../../shared-kernel/types';

export type UserStorageState = {
  user: User | null;
  isAuth: boolean;
};

export interface UserStorage {
  createUser: (data: RegistrationData) => Promise<User | ErrorMessage>;
  authUser: (data: AuthenticateData) => Promise<User | ErrorMessage>;
  checkAuth: () => Promise<User | ErrorMessage>;
  logout: () => Promise<void | ErrorMessage>;
  changeUserData: (data: ChangeUserData) => Promise<User | ErrorMessage>;
}
