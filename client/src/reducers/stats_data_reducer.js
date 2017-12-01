import { FETCH_STATS_DATA } from "./../actions/types";

const initialState = {
  result: [],
  battleTag: "",
  region: "us",
  renderView: false,
  renderLoading: false,
  playerFound: "",
  page: "search"
};

function statsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS_DATA:
      return {
        ...state,
        result: action.payload,
        renderLoading: true
      }
    default:
      return state;
  }
}

export default statsDataReducer;
