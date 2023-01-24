import authReducer from "./authReducers";
import { combineReducers } from "redux";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
