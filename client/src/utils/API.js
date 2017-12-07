import axios from "axios";

export default {
  getStatData(region, battleTag) {
    return axios.get(`https://ow-api.com/v1/stats/pc/${region}/${battleTag}/complete`);
  },
  getSignedInUser() {
    return axios.get("https://powerful-wildwood-93073.herokuapp.com/api/current_user");
  },
  saveFavPlayer(player) {
    return axios.post("/api/favorite", player)
  }
};
