import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  } catch (error) {
    console.log("Error saving user data to AsyncStorage:", error);
  }
};

export const logoutAction = () => async (dispatch, getState) => {
  try {
    const { user } = getState();
    if (user.isLoggedIn) {
      dispatch({
        type: "LOGOUT"
      });
    }
  } catch (error) {
    console.log("Error during logout:", error);
  }
};