import {
  User,
  AuthenticateData,
  RegistrationData,
} from '../../../domains/user.entity';
import { ErrorMessage } from '../../../shared-kernel/types';

export interface AuthenticationUseCase {
  auth: (data: AuthenticateData) => Promise<User | ErrorMessage>;
  registrate: (data: RegistrationData) => Promise<User | ErrorMessage>;
  checkAuth: () => Promise<User | ErrorMessage>;
  exit: () => Promise<void | ErrorMessage>;
}
