import { useMutation } from 'react-query';
import { useUser } from '../../application/services/user.service';
import { ChangeUserData, User } from '../../domains/user.entity';
import { ErrorMessage } from '../../shared-kernel/types';

export function useUserUpdate() {
  const { changeUserData } = useUser();
  const userUpdateMutation = useMutation<User, ErrorMessage, ChangeUserData>(
    (userData) => changeUserData(userData),
  );

  return userUpdateMutation;
}
