import { ReactElement } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { AuthForm } from '../components/auth-form';
import { useAppSelector, selectUser } from '../store/store';

export function Auth(): ReactElement {
  const history = useHistory<{ path: string }>();
  const {
    data: { user },
  } = useAppSelector(selectUser);

  // useEffect(() => {
  //   if (user) {
  //     return (<Redirect to={history.location?.state?.path || '/'} />);
  //   }
  // }, [user]);

  if (user) {
    console.dir(history.location);
    return <Redirect to={history.location?.state?.path || '/'} />;
  }

  return <AuthForm />;
}
