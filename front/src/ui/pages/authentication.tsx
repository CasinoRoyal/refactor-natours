import { ReactElement, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { AuthForm } from '../components/auth-form';
import { authContext } from '../context/auth';

export function Auth(): ReactElement {
  const history = useHistory<{ path: string }>();
  const { data: user } = useContext(authContext);

  if (user) {
    return <Redirect to={history.location?.state?.path || '/'} />;
  }

  return <AuthForm />;
}
