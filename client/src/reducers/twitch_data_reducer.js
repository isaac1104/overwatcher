import { FETCH_TWITCH_DATA } from "./../actions/types";

const initialState = [];

function twitchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWITCH_DATA:
      return [...state, ...action.payload];
      default:
        return state;
  }
}

export default twitchDataReducer;
