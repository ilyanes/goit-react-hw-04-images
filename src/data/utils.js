import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorNotify = () =>
  toast.error('No images found', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });

export const warnNotify = () =>
  toast.warn(' No data entered', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
