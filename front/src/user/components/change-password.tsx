import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ChangePasswordType } from '../types';
import { updateUserDataAsync } from '../actions';
import { useFetchSubmit } from '../hooks/use-fecth-submit';
import { userChangePasswordSchema } from '../utils/schemas';
import { useNotify } from '../../shareable/hooks/use-notify';

export const ChangePassword: FC = () => {
  const { fetch } = useFetchSubmit<ChangePasswordType>(updateUserDataAsync);
  const { getErrorNotify } = useNotify();
  
  const { register, handleSubmit, errors } = useForm<ChangePasswordType>({
    validationSchema: userChangePasswordSchema
  });

  useEffect(() => {
    if (errors.passwordConfirm) {
      getErrorNotify(errors);
    }
  }, [errors, getErrorNotify])


  const handlerPasswordSubmit = (newData: ChangePasswordType) => {
    fetch(newData);
  }

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form 
        className="form form-user-settings" 
        onSubmit={handleSubmit(handlerPasswordSubmit)}
      >
        <div className="form__group">
          <label htmlFor="password-current" className="form__label">
            Current password
          </label>

          <input 
            type="password" 
            id="password-current" 
            className="form__input" 
            placeholder="••••••••" 
            minLength={8}
            name='currentPassword'
            ref={register}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            New password
          </label>

          <input 
            type="password" 
            id="password" 
            className="form__input" 
            placeholder="••••••••" 
            minLength={8}
            name='password'
            ref={register}
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label htmlFor="password-confirm" className="form__label">
            Confirm password
          </label>

          <input 
            type="password" 
            id="password-confirm" 
            className="form__input" 
            placeholder="••••••••" 
            minLength={8}
            name='passwordConfirm'
            ref={register}
          />
        </div>                                 
        <div className="form__group right">
          <button className="btn btn--small btn--green">
            Save password
          </button>
        </div>
      </form>
    </div>
  );
}