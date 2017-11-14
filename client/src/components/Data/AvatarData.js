import _ from "lodash";
import React from "react";
import Heroes from "./../../utils/Heroes";

const AvatarData = (props) => {

const mainHero =  _.map(props.result.competitiveStats.topHeroes, (value, key) => {
    return {"name": key, "win": value.gamesWon};
  }).reduce((acc,curr) => {
    if (acc.win > curr.win) {
      return acc;
    } else {
      return curr;
    }
  });

  const style = {
      padding: "10px",
      backgroundImage: `url(/images/heroes-bg/${mainHero.name}.png)`,
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      opacity: "0.8"
  }

  return(
    <div className="container player-stats">
      <div className="card player-intro" style={style}>
        <div className="card-header player-avatar">
          <div>
            <img src={props.result.icon} className="img-responsive avatar" alt="avatar"/>
          </div>
          <div>
            <h5>LV.{props.result.level}</h5>
            <h4>{props.result.name}</h4>
            <h6>Main Hero: {mainHero.name}</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AvatarData;
