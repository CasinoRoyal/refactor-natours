import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userDataSchema } from '../../shared-kernel/schemas';
import { shallowCompare } from '../../shared-kernel/helpers';
import { ChangeUserData } from '../../domains/user.entity';
import { notifier } from '../../adapters/notifier/notifier.adapter';
import { useCheckAuth } from '../hooks/use-auth';
import { useUserUpdate } from '../hooks/use-user';

export function UpdateUserDataForm(): ReactElement {
  const { data: user } = useCheckAuth();
  const updateUser = useUserUpdate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userDataSchema),
  });

  useEffect(() => {
    if (updateUser.isSuccess) {
      notifier().success('Your data was successfully updated');
    }

    if (updateUser.isError) {
      notifier().warn('Unpredictable error was occurred. Try again');
    }
  }, [updateUser.isSuccess, updateUser.isError]);

  useEffect(() => {
    if (errors) {
      for (const errorTitle in errors) {
        const errorsObject = errors as any;
        notifier().error(errorsObject[errorTitle].message);
      }
    }
  }, [errors]);

  const handlerUserDataSubmit = (changedData: ChangeUserData): void => {
    if (!user) {
      notifier().error('You should be authorized');
      return;
    }

    const compareValues = {
      name: user.name,
      email: user.email,
    };

    const isEqual = shallowCompare<ChangeUserData>(changedData, compareValues);

    if (isEqual) {
      console.info('same data');
      return;
    }

    updateUser.mutate(changedData);
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form
        className="form form-user-data"
        onSubmit={handleSubmit(handlerUserDataSubmit)}
      >
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            value={user?.name}
            className="form__input"
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            value={user?.email}
            className="form__input"
            required
          />
        </div>

        <div className="form__group form__photo-upload">
          <img
            src={`img/users/${user?.photo}`}
            alt="User"
            className="form__user-photo"
          />
          <button className="btn-small btn-text">Choose new photo</button>
        </div>

        <div className="form__group right">
          <button
            disabled={updateUser.isLoading}
            type="submit"
            className="btn btn--small btn--green"
          >
            Save settings
          </button>
        </div>
      </form>
    </div>
  );
}
