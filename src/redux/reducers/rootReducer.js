import { combineReducers } from "redux";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({
  timers: timerReducer
});

export default rootReducer;