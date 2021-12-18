import { ReactElement, ReactNode } from 'react';
import './backdrop.css';

type BackdropProps = {
  children?: ReactNode;
  closeHandler?: () => void;
};

export function Backdrop({
  children,
  closeHandler,
}: BackdropProps): ReactElement {
  const handleClick = (target: Element) => {
    if (closeHandler) {
      if (target.className === 'backdrop') return closeHandler();
    }
    return;
  };

  return (
    <div onClick={(e) => handleClick(e.target as Element)} className="backdrop">
      {children}
    </div>
  );
}
