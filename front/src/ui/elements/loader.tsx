import { ReactElement } from 'react';
import { ReactComponent as LoaderLogo } from './loader.svg';
import { Backdrop } from './backdrop';
import './loader.css';

export function Loader(): ReactElement {
  return (
    <Backdrop>
      <div className="loader">
        <LoaderLogo />
      </div>
    </Backdrop>
  );
}
