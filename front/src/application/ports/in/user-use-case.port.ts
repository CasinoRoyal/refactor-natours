import { User, ChangeUserData } from '../../../domains/user.entity';

export interface UserUseCase {
  changeUserData: (data: ChangeUserData) => Promise<User>;
}
