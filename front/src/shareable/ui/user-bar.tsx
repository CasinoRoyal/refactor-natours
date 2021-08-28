import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { UserData } from '../../user/types';

// import { useUser } from '../../user/hooks/use-user';

export const UserBar: FC<{ user: UserData }> = ({ user }): ReactElement => {
  // const { data } = useUser();

  const renderTemplate = user ? (
      <>        
        <button className="nav__el nav__el--logout">
          Logout
        </button>

        <Link to="/profile" className="nav__el">
          <img src={`img/users/${user.photo}`} alt="User" className="nav__user-img" />
          <span>{user.name}</span>
        </Link>
      </>
    ) : (
      <>
        <Link to={`/auth/login`} className="nav__el">Log in</Link>
        <Link to={`/auth/signup`} className="nav__el nav__el--cta">Sign up</Link>
      </>
     );

  return (
    <nav className="nav nav--user">
      {renderTemplate}
    </nav>
  );
}


// <Link to="/booking" className="nav__el">My bookings</Link>