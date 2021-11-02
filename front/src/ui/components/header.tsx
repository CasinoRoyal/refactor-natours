import { ReactElement } from 'react';
import { Nav } from './nav';
import { UserBar } from './user-bar';

export function Header(): ReactElement {
  return (
    <header className="header">
      <Nav />

      <div className="header__logo">
        <img src="img/logo-white.png" alt="Natours logo" />
      </div>

      <UserBar />
    </header>
  );
}
