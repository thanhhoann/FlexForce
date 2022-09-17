const isExistKey = localStorage.getItem('persist:root');

export const persistRoot =
  isExistKey && JSON.parse(localStorage.getItem('persist:root'));
export const persistAuthStatus =
  isExistKey && JSON.parse(persistRoot.auth).authStatus;
export const persistUser = isExistKey && JSON.parse(persistRoot?.auth)?.user;
