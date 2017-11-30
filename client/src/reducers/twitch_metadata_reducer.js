import { FETCH_TWITCH_METADATA } from "../actions/types";

const initialState = [];

function twitchMetadataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWITCH_METADATA:
      return [...state, ...action.payload]
    default:
      return state;
  }
}

export default twitchMetadataReducer;
