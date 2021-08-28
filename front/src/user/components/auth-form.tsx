import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useFetchSubmit } from '../hooks/use-fecth-submit';
import { AuthFormData } from '../types';
import { fetchUserAsync } from '../actions';
import { loginSchema, signupSchema } from '../utils/schemas';
import { useNotify } from '../../shareable/hooks/use-notify';

export const AuthForm:FC<{isSignup: boolean}> = ({ isSignup }) => {
  const { register, handleSubmit, errors } = useForm<AuthFormData>({
    validationSchema: isSignup ? signupSchema : loginSchema
  });
  const { getErrorNotify } = useNotify();

  const method = isSignup ? 'signup' : 'login';
  
  const { fetch } = useFetchSubmit<AuthFormData>(fetchUserAsync, method);
    
  useEffect(() => {
    if (Object.keys(errors).length !==0) {
      getErrorNotify(errors);
    }
  }, [errors, getErrorNotify]);

  return (
    <form className="form form--login" onSubmit={handleSubmit(fetch)}>

    {isSignup && (
        <div className="form__group">
          <label htmlFor="username" className="form__label">
            Username
          </label> 

          <input 
            type="text"
            name="username"
            id="username" 
            className="form__input"
            placeholder="Username"
            required
            ref={register}
          />
        </div>
      )}
      
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email address 
        </label>

        <input 
          type="email"
          name="email"
          id="email" 
          className="form__input"
          placeholder="you@example.com"
          required
          ref={register}
         />
      </div>
      
      <div className="form__group ma-bt-md">
        <label htmlFor="password" className="form__label">
          Password 
        </label> 

        <input 
          type="password" 
          name="password"
          id="password" 
          className="form__input"
          placeholder="••••••••"
          minLength={8}
          required
          ref={register}
        />
      </div>

      {isSignup && (
        <div className="form__group ma-bt-md">
          <label htmlFor="passwordConfirm" className="form__label">
            Confirm password
          </label> 

          <input 
            type="password"
            name="passwordConfirm"
            id="passwordConfirm" 
            className="form__input"
            placeholder="••••••••"
            minLength={8}
            required
            ref={register}
          />
        </div>
      )}
      
      <div className="form__group">
        <button className="btn btn--green">
          {isSignup ? 'Sign up' : 'Login'}
        </button> 
      </div>

    </form> 
  );
};