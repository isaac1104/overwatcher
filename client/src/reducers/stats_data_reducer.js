import { FETCH_STATS_DATA } from "./../actions/types";

const initialState = {
  result: []
};

function statsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS_DATA:
      return {
        ...state,
        result: action.payload,
      }
    default:
      return state;
  }
}

export default statsDataReducer;
