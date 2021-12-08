import { ReactElement } from 'react';
import { UpdateUserDataForm } from './update-user-form';

// import { ChangeUserData } from './change-user-data';
// import { ChangePassword } from './change-password';

export function UserSettings(): ReactElement {
  return (
    <div className="user-view">
      {/* Setting Sidebar */}
      <nav className="user-view__menu">
        <ul className="side-nav">
          <li className="side-nav--active">
            <a href="/nowhere">
              <svg>
                <use xlinkHref="img/icons.svg#icon-settings" />
              </svg>
              Settings
            </a>
          </li>
          <li>
            <a href="/nowhere">
              <svg>
                <use xlinkHref="img/icons.svg#icon-briefcase" />
              </svg>
              My bookings
            </a>
          </li>
          <li>
            <a href="/nowhere">
              <svg>
                <use xlinkHref="img/icons.svg#icon-star" />
              </svg>
              My reviews
            </a>
          </li>
          <li>
            <a href="/nowhere">
              <svg>
                <use xlinkHref="img/icons.svg#icon-credit-card" />
              </svg>
              Billing
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="user-view__content">
        <UpdateUserDataForm />

        <div className="line">&nbsp;</div>

        {/*<ChangePassword />*/}
      </div>
    </div>
  );
}
