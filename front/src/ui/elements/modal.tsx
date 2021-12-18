import { ReactNode } from 'react';
import { Backdrop } from './backdrop';
import { Portal } from './portal';
import './modal.css';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
  withHeader?: boolean;
  headerTitle?: string;
};

export function Modal({
  children,
  onClose,
  isOpened,
  withHeader = false,
  headerTitle,
}: ModalProps) {
  if (!isOpened) return null;

  return (
    <Portal>
      <Backdrop closeHandler={onClose}>
        <div className="modal">
          {withHeader && (
            <header className="modal__header">
              {headerTitle}
              <button onClick={onClose} className="modal__close-btn">
                &#10132;
              </button>
            </header>
          )}
          {children}
        </div>
      </Backdrop>
    </Portal>
  );
}
