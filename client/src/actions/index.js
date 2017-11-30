import axios from "axios";
import { FETCH_TWITCH_DATA } from "./types";

export const getTwitchData = async (dispatch) => {
  const {data} = await axios.get("https://api.twitch.tv/helix/streams?first=20&game_id=488552", {
    headers: {
      "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
    }
  });
  dispatch({
    type: FETCH_TWITCH_DATA,
    payload: data
  });
}
