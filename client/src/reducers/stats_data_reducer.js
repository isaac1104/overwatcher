import { FETCH_STATS_DATA, FETCH_STATS_ERROR, FETCH_STATS_INIT } from "./../actions/types";

const initialState = {
  result: [],
  renderLoading: false,
  playerFound: ""
};

function statsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS_INIT:
      return {
        ...state,
        renderLoading: true
      };
    case FETCH_STATS_DATA:
      return {
        result: action.payload,
        renderLoading: false,
        playerFound: true

      };
    case FETCH_STATS_ERROR:
      return {
        renderLoading: false,
        playerFound: false

      };
    default:
      return state;
  }
}

export default statsDataReducer;
