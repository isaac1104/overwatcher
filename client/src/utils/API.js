import axios from "axios";

export default {
  getStatData(battleTag) {
    return axios.get(`https://owapi.net/api/v3/u/${battleTag}/stats`);
  },
  getHeroData(battleTag) {
    return axios.get(`https://owapi.net/api/v3/u/${battleTag}/heroes`);
  }
};
