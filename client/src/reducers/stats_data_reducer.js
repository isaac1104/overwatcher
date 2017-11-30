import { FETCH_STATS_DATA } from "./../actions/types";

const initialState = [];

function statsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default statsDataReducer;
