import { FETCH_TWITCH_METADATA, DESTORY_TWITCH_DATA } from "../actions/types";

const initialState = [];

function twitchMetadataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWITCH_METADATA:
      return [...state, ...action.payload];
    case DESTORY_TWITCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default twitchMetadataReducer;
