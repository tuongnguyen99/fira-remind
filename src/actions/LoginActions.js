export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: 'SET_LOGGED_IN',
    payload: isLoggedIn,
  };
};
