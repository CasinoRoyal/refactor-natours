import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer(): ReactElement {
  return (
    <div className="footer">
      <Link to="/" className="footer__logo">
        <img src="/img/logo-green.png" alt="Natours logo" />
      </Link>
      <ul className="footer__nav">
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Download apps</a>
        </li>
        <li>
          <a href="/">Become a guide</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. All rights reserved.
      </p>
    </div>
  );
}
