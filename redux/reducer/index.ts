import { combineReducers } from "redux";
import { authReducer } from "../state/authState";
import { userReducer } from "../state/userState";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
