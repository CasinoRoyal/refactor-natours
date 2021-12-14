import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './nav';
import { UserBar } from './user-bar';
import './header.css';

export function Header(): ReactElement {
  return (
    <header className="header">
      <Nav />

      <div className="header__logo">
        <Link to="/">
          <img src="img/logo-white.png" alt="Natours logo" />
        </Link>
      </div>

      <UserBar />
    </header>
  );
}
