export const profileRequest = () => ({
  type: "PROFILE_REQUEST"
});

export const profileSuccess = (userData) => ({
  type: "PROFILE_SUCCESS",
  payload: userData 
});

export const profileError = (error) => ({
  type: "PROFILE_ERROR",
  payload: error
});

