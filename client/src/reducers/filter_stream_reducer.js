import { FILTER_STREAM } from "./../actions/types";

const initialState = "";

function filterStreamReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_STREAM:
      return state;
    default:
      return state;
  }
}

export default filterStreamReducer;
