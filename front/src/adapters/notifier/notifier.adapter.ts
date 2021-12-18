import { toast } from 'react-toastify';
import { INotifier } from '../../application/ports/out/notifier.port';

export function notifier(): INotifier {
  const success = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const warn = (message: string) => {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const error = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const info = (message: string) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return {
    success,
    warn,
    error,
    info,
  };
}
