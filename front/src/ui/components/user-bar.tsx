import { ReactElement, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSignOut } from '../hooks/use-auth';
import { authContext } from '../context/auth';
import './user-bar.css';

export function UserBar(): ReactElement {
  const { pathname } = useLocation();
  const { data: user } = useContext(authContext);
  const signOutMutation = useSignOut();

  function handleButtonClick() {
    signOutMutation.mutate();
  }

  const renderTemplate = user ? (
    <>
      <button onClick={handleButtonClick} className="nav__el nav__el--logout">
        Logout
      </button>

      <Link to="/profile" className="nav__el">
        <img
          src={`img/users/${user.photo}`}
          alt="User"
          className="nav__user-img"
        />
        <span>{user.name}</span>
      </Link>
    </>
  ) : (
    <>
      <Link
        to={{ pathname: '/auth/login', state: { path: pathname } }}
        className="nav__el"
      >
        Log in
      </Link>
      <Link
        to={{ pathname: '/auth/signup', state: { path: pathname } }}
        className="nav__el nav__el--cta"
      >
        Sign up
      </Link>
    </>
  );

  return <nav className="nav nav--user">{renderTemplate}</nav>;
}
