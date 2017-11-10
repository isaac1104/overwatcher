import React from "react";

const PlayerStats = (props) => {
  return (
    <div className="card player-stats-data">
      <div className="card-header player-stats-header">
        <img src={props.result.ratingIcon} alt="rank" className="rank-img"/>
        <div>
          <h5>{props.result.ratingName}</h5>
          <h5>{props.result.rating} Points</h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5>Win Rate</h5>
            <hr/>
            <h6>{((props.result.competitiveStats.games.won / props.result.competitiveStats.games.played) * 100).toFixed(0)}%</h6>
            <h6>{props.result.competitiveStats.games.won} W {props.result.competitiveStats.careerStats.allHeroes.average.gamesTied} D {props.result.competitiveStats.careerStats.allHeroes.average.gamesLost} L</h6>
          </div>
          <div className="col-md-4">
            <h5>K / D</h5>
            <hr/>
          </div>
          <div className="col-md-4">
            <h5>Time Played</h5>
            <hr/>
            <h6>{props.result.competitiveStats.careerStats.allHeroes.game.timePlayed}</h6>
            <h6>{props.result.competitiveStats.careerStats.allHeroes.game.gamesPlayed} game(s)</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PlayerStats
