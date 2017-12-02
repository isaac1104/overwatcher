import axios from "axios";
import { FETCH_TWITCH_DATA } from "./types";
import { FETCH_TWITCH_METADATA } from "./types";
import { FETCH_STATS_DATA } from "./types";
import { FILTER_STREAM } from "./types";

export const getTwitchData = () => async (dispatch) => {
  const request = await axios.get("https://api.twitch.tv/helix/streams?first=20&game_id=488552", {
    headers: {
      "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
    }
  });
  const { data } = request.data;
  dispatch({ type: FETCH_TWITCH_DATA, payload: data });
}

export const getTwitchMetaData = () => async (dispatch) => {
  const request = await axios.get("https://api.twitch.tv/helix/streams/metadata?first=20&game_id=488552", {
      headers: {
        "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
      }
    });
    const { data } = request.data;
    dispatch({ type: FETCH_TWITCH_METADATA, payload: data });
}

export const getStatsData = (battletag) => async (dispatch) => {
  const request = await axios.get(`https://ow-api.com/v1/stats/pc/us/${battletag}/complete`);
  const { data } = request;
  dispatch({ type: FETCH_STATS_DATA, payload: data });
}

export const filterStream = (role) => {
  return {
    type: FILTER_STREAM,
    payload: role
  }
}
