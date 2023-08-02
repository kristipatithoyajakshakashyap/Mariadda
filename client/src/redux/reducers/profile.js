const initialState = {
  data: null,
  loading: false,
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload 
        }
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default profileReducer;
