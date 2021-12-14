import { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUp, useSignIn } from '../hooks/use-auth';
import { loginSchema, signupSchema } from '../../shared-kernel/schemas';
import { RegistrationData, AuthenticateData } from '../../domains/user.entity';

export type AuthFormData = {
  email: string;
  password: string;
  name?: string;
  passwordConfirm?: string;
};

export function AuthForm(): ReactElement {
  const signUpMutation = useSignUp();
  const signInMutation = useSignIn();
  const { pathname } = useLocation();
  const chosenProcedure = pathname.split('/')[2];
  const isSignup = chosenProcedure === 'signup' ? true : false;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(loginSchema),
  });

  useEffect(() => {
    return () => reset();
  }, []);

  /**
   * Add notifier */

  console.log(errors);

  async function onSubmitChange(data: RegistrationData | AuthenticateData) {
    if ('name' in data && isSignup) {
      await signUpMutation.mutate(data);
    } else {
      await signInMutation.mutate(data);
    }
  }

  return (
    <form className="form form--login" onSubmit={handleSubmit(onSubmitChange)}>
      {isSignup && (
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>

          <input
            {...register('name')}
            type="text"
            id="name"
            className="form__input"
            placeholder="Name"
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
        <button
          disabled={signInMutation.isLoading || signUpMutation.isLoading}
          type="submit"
          className="btn btn--green"
        >
          {isSignup ? 'Sign up' : 'Login'}
        </button>
      </div>
    </form>
  );
}
