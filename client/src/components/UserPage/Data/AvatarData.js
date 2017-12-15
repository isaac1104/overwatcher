import _ from "lodash";
import React from "react";

const AvatarData = (props) => {

const mainHero =  _.map(props.statsData.result.competitiveStats.topHeroes, (value, key) => {
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
        <div className="player-avatar">
          <div>
            <img src={props.statsData.result.icon} className="img-responsive avatar" alt="avatar"/>
          </div>
          <div>
            <h1>{props.statsData.result.name}</h1>
            <h3>LV.{props.statsData.result.level}</h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AvatarData;
