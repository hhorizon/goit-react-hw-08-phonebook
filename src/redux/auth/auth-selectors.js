export const getUser = state => state.auth.user;

export const getUserName = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getToken = state => state.auth.token;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
