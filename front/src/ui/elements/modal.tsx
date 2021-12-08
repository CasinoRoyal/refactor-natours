import { ReactNode } from 'react';
import { Backdrop } from './backdrop';
import { Portal } from './portal';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
};

export function Modal({ children, onClose, isOpened }: ModalProps) {
  if (!isOpened) return null;

  return (
    <Portal>
      <Backdrop closeHandler={onClose}>
        <div className="modal">{children}</div>
      </Backdrop>
    </Portal>
  );
}
