import { combineReducers } from "redux";
import twitchDataReducer from "./twitch_data_reducer";
import twitchMetadataReducer from "./twitch_metadata_reducer";
import statsDataReducer from "./stats_data_reducer";

const rootReducer = combineReducers({
  twitchData: twitchDataReducer,
  twitchMetaData: twitchMetadataReducer,
  statsData: statsDataReducer
});

export default rootReducer;
