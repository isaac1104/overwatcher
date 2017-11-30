import { combineReducers } from "redux";
import twitchDataReducer from "./twitch_data_reducer";

const rootReducer = combineReducers({
  data: twitchDataReducer
});

export default rootReducer;
