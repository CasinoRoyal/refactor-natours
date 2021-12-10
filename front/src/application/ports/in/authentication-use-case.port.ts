import {
  User,
  AuthenticateData,
  RegistrationData,
} from '../../../domains/user.entity';

export interface AuthenticationUseCase {
  auth: (data: AuthenticateData) => Promise<User>;
  registrate: (data: RegistrationData) => Promise<User>;
  checkAuth: () => Promise<User>;
  exit: () => Promise<void>;
}
