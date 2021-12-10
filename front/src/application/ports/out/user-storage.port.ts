import {
  User,
  RegistrationData,
  AuthenticateData,
  ChangeUserData,
} from '../../../domains/user.entity';

export type UserStorageState = {
  user: User | null;
  isAuth: boolean;
};

export interface UserStorage {
  createUser: (data: RegistrationData) => Promise<User>;
  authUser: (data: AuthenticateData) => Promise<User>;
  checkAuth: () => Promise<User>;
  logout: () => Promise<void>;
  changeUserData: (data: ChangeUserData) => Promise<User>;
}
