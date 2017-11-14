import axios from "axios";

export default {
  getStatData(region, battleTag) {
    return axios.get(`https://ow-api.com/v1/stats/pc/${region}/${battleTag}/complete`);
  },
  savedUsers(User) {
    return axios.post("api/users", User);
  },
  getSavedUsers() {
    return axios.get("api/users");
  }
};
