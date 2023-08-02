import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/auth";
import thunk from "redux-thunk";
<<<<<<< HEAD
import profileReducer from "./reducers/profile";
=======

>>>>>>> a8dfc2ce4447fb17cf0a7e5d0e709d7194ae1ab4
const RootReducers = combineReducers({
  // your reducers here...
  user: userReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
