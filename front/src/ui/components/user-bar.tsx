import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, selectUser } from '../store/store';
import { signOut } from '../store/user.reducer';
import { useAppDispatch } from '../store/store';

export function UserBar(): ReactElement {
  const { pathname } = useLocation();
  const {
    data: { user },
  } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  function handleButtonClick() {
    dispatch(signOut());
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
