const initialState = {
  userData: null,
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        userData: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
