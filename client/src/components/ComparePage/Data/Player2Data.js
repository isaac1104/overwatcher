import _ from "lodash";
import React from "react";

const Player2Data = (props) => {

  const mainHero =  _.map(props.result2.competitiveStats.topHeroes, (value, key) => {
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "0.8"
    }

  return (
    <div className="card player-stats-data">
      <div className="card-header player-stats-header" style={style}>
        <img src={props.result2.ratingIcon} alt="rank" className="rank-img"/>
        <div>
          <h5>{props.result2.name}</h5>
          <h5>Most Played Hero: {mainHero.name}</h5>
          <h5>{props.result2.ratingName}</h5>
          <h5>{props.result2.rating} Points</h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Win Rate</strong></h5>
            <hr/>
            <h6>{((props.result2.competitiveStats.games.won / props.result2.competitiveStats.games.played) * 100).toFixed(0)}%</h6>
            <h6>{props.result2.competitiveStats.games.won} W {props.result2.competitiveStats.careerStats.allHeroes.average.gamesTied} D {props.result2.competitiveStats.careerStats.allHeroes.average.gamesLost} L</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Total Games Won</strong></h5>
            <hr/>
            <h6>{props.result2.gamesWon}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Time Played</strong></h5>
            <hr/>
            <h6>{props.result2.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
            <h6>{props.result2.competitiveStats.careerStats.allHeroes.game.gamesPlayed} game(s)</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Player2Data;
