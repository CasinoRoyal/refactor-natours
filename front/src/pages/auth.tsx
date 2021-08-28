import React, { FC, ReactElement } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { useUser } from '../user/hooks/use-user';
import { WrappedSpinner } from '../shareable/ui/wrapper';
import { AuthForm } from '../user/components/auth-form';

export const AuthPage: FC = (): ReactElement => {
  const { data, isFetching, error } = useUser();
  const { methodAuth } = useParams<{methodAuth: string}>();

  if (data) {
    return <Redirect to='/' />
  }
  
  const isSignup = methodAuth ==='signup' ? true : false;

  if (isFetching) return <WrappedSpinner />

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">
          {isSignup ? 'Create new account' : 'Log into your account'}
        </h2>
        
        <AuthForm isSignup={isSignup} />
      </div>
    </main>
  );
}