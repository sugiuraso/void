import { VueMessage } from 'viy-ui';

export const showMessage = (message, duration = 3000, type) => {
  return VueMessage({
    message,
    duration,
    type,
    showClose: true,
  });
};

export const showSuccessMessage = (message, duration) => {
  return showMessage(message, duration, 'success');
};

export const showErrorMessage = (message, duration = 0) => {
  return showMessage(message, duration, 'error');
};

export const showWarningMessage = (message, duration) => {
  return showMessage(message, duration, 'warning');
};
