import { FETCH_SIGNED_IN_BATTLETAG } from "./../actions/types";

const initialState = null;

function signedInBattleTag(state = initialState, action) {
  switch (action.type) {
    case FETCH_SIGNED_IN_BATTLETAG:
      return action.payload;
    default:
      return state;
  }
};

export default signedInBattleTag;
