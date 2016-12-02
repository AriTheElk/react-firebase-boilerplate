export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';

export function dismiss (notification) {
  return {
    type: DISMISS_NOTIFICATION,
    notification
  };
}

export function notify (message) {
  return {
    type: PUSH_NOTIFICATION,
    message
  };
}