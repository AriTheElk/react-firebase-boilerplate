export default {
  ajaxCallsInProgress: 0,
  auth: {
    currentUserUID: null,
    initialized: false,
    isLogged: false,
  },
  routesPermissions: {
    requireAuth: [
      '/admin',
    ],
    routesRequireAdmin: [
      '/admin',
    ],
  },
  routing: {},
  user: {
    isAdmin: undefined,
  },
};
