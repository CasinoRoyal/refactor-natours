import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export function Nav(): ReactElement {
  return (
    <nav className="nav nav--tours">
      <Link to="/" className="nav__el">
        Home
      </Link>
      <Link to="/tour/all-tours" className="nav__el">
        All tours
      </Link>
      <form className="nav__search">
        <button className="nav__search-btn">
          <svg>
            <use href="img/icons.svg#icon-search" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search tours"
          className="nav__search-input"
        />
      </form>
    </nav>
  );
}
