import { User, ChangeUserData } from '../../../domains/user.entity';
import { ErrorMessage } from '../../../shared-kernel/types';

export interface UserUseCase {
  changeUserData: (data: ChangeUserData) => Promise<User | ErrorMessage>;
}
