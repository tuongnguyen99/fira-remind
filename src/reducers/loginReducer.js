const initialState = {
  isLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { isLogged: action.payload };
    default:
      return state;
  }
};
