import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../domains/user.entity';

type UserState = {
  user: User;
  isAuth: boolean;
};

export function UserBar(): ReactElement {
  const userState: UserState = {
    user: {} as User,
    isAuth: false,
  };

  const renderTemplate = userState.isAuth ? (
    <>
      <button className="nav__el nav__el--logout">Logout</button>

      <Link to="/profile" className="nav__el">
        <img
          src={`img/users/${userState.user.photo}`}
          alt="User"
          className="nav__user-img"
        />
        <span>{userState.user.name}</span>
      </Link>
    </>
  ) : (
    <>
      <Link to={`/auth/login`} className="nav__el">
        Log in
      </Link>
      <Link to={`/auth/signup`} className="nav__el nav__el--cta">
        Sign up
      </Link>
    </>
  );

  return <nav className="nav nav--user">{renderTemplate}</nav>;
}
