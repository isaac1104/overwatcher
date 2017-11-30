import { combineReducers } from "redux";
import twitchDataReducer from "./twitch_data_reducer";
import twitchMetadataReducer from "./twitch_metadata_reducer";

const rootReducer = combineReducers({
  data: twitchDataReducer,
  metaData: twitchMetadataReducer
});

export default rootReducer;
