import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  form: formReducer,
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
