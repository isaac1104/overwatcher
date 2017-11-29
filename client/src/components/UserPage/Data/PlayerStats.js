import React from "react";

const PlayerStats = (props) => {
  const {competitiveStats} = props.result;
  const {allHeroes} = props.result.competitiveStats.careerStats;

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
            <h5><strong>Win Rate</strong></h5>
            <hr/>
            <h6>{((competitiveStats.games.won / competitiveStats.games.played) * 100).toFixed(0)}%</h6>
            <h6>{allHeroes.game.gamesWon}W {allHeroes.game.gamesTied}D {allHeroes.game.gamesLost}L</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Total Games Won</strong></h5>
            <hr/>
            <h6>{props.result.gamesWon}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Time Played</strong></h5>
            <hr/>
            <h6>{allHeroes.game.timePlayed}</h6>
            <h6>{allHeroes.game.gamesPlayed} games</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PlayerStats
