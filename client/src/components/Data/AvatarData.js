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

  return(
    <div className="container player-stats">
      <div className="card player-intro">
        <div className="card-header player-avatar">
          <div>
            <img src={props.result.icon} className="img-responsive avatar" alt="avatar"/>
          </div>
          <div>
            <h5>LV.{props.result.level}</h5>
            <h4>{props.result.name}</h4>
            <h6>{mainHero.name}</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AvatarData;
