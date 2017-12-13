import { FETCH_SIGNED_IN_BATTLETAG } from "./../actions/types";

const initialState = {};

function signedInBattleTag(state = initialState, action) {
  switch (action.type) {
    case FETCH_SIGNED_IN_BATTLETAG:
      return {
      ...state,
      data: action.payload
    };
    default:
      return state;
  }
};

export default signedInBattleTag;
