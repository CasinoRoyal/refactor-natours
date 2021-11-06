import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../store/store';
import { signIn, signUp } from '../store/user.reducer';
import { loginSchema, signupSchema } from '../../shared-kernel/schemas';
import { RegistrationData, AuthenticateData } from '../../domains/user.entity';

export type AuthFormData = {
  email: string;
  password: string;
  username?: string;
  passwordConfirm?: string;
};

export function AuthForm(): ReactElement {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const chosenProcedure = pathname.split('/')[2];
  const isSignup = chosenProcedure === 'signup' ? true : false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(loginSchema),
  });

  /**
   * Add notifier */

  console.log(errors);

  async function onSubmitChange(data: RegistrationData | AuthenticateData) {
    if ('username' in data && isSignup) {
      await dispatch(signUp(data));
    } else {
      await dispatch(signIn(data));
    }
  }

  return (
    <form className="form form--login" onSubmit={handleSubmit(onSubmitChange)}>
      {isSignup && (
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Username
          </label>

          <input
            {...register('username')}
            type="text"
            id="username"
            className="form__input"
            placeholder="Username"
            required
          />
        </div>
      )}

      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email address
        </label>

        <input
          {...register('email')}
          type="email"
          id="email"
          className="form__input"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form__group ma-bt-md">
        <label htmlFor="password" className="form__label">
          Password
        </label>

        <input
          {...register('password')}
          type="password"
          id="password"
          className="form__input"
          placeholder="••••••••"
          minLength={8}
          required
        />
      </div>

      {isSignup && (
        <div className="form__group ma-bt-md">
          <label htmlFor="passwordConfirm" className="form__label">
            Confirm password
          </label>

          <input
            {...register('passwordConfirm')}
            type="password"
            id="passwordConfirm"
            className="form__input"
            placeholder="••••••••"
            minLength={8}
            required
          />
        </div>
      )}

      <div className="form__group">
        <button type="submit" className="btn btn--green">
          {isSignup ? 'Sign up' : 'Login'}
        </button>
      </div>
    </form>
  );
}
