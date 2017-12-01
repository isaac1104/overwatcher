import { FILTER_STREAM } from "./../actions/types";

const initialState = "All";

function filterStreamReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_STREAM:
      return action.payload;
    default:
      return state;
  }
}

export default filterStreamReducer;
