export const persistRoot = JSON.parse(localStorage.getItem('persist:root'));
export const persistAuthStatus = JSON.parse(persistRoot.auth).authStatus;
export const persistUser = JSON.parse(persistRoot?.auth)?.user;
