import React from "react";

const Player1Data = (props) => {
  console.log(props.result1);
  return (
    <div className="card player-stats-data">
      <div className="card-header player-stats-header">
        <img src={props.result1.ratingIcon} alt="rank" className="rank-img"/>
        <div>
          <h5>{props.result1.ratingName}</h5>
          <h5>{props.result1.rating} Points</h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Win Rate</strong></h5>
            <hr/>
            <h6>{((props.result1.competitiveStats.games.won / props.result1.competitiveStats.games.played) * 100).toFixed(0)}%</h6>
            <h6>{props.result1.competitiveStats.games.won} W {props.result1.competitiveStats.careerStats.allHeroes.average.gamesTied} D {props.result1.competitiveStats.careerStats.allHeroes.average.gamesLost} L</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Total Games Won</strong></h5>
            <hr/>
            <h6>{props.result1.gamesWon}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Time Played</strong></h5>
            <hr/>
            <h6>{props.result1.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
            <h6>{props.result1.competitiveStats.careerStats.allHeroes.game.gamesPlayed} game(s)</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Player1Data;
