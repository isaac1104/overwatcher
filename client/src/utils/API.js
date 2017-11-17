import axios from "axios";

export default {
  getStatData(region, battleTag) {
    return axios.get(`https://ow-api.com/v1/stats/pc/${region}/${battleTag}/complete`);
  },
  saveUsers(user) {
    return axios.post("api/users", user);
  },
  getSavedUsers() {
    return axios.get("api/users");
  },
  getSignedInUser() {
    return axios.get("https://powerful-wildwood-93073.herokuapp.com/log");
  }
};
