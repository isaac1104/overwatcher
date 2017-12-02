import React from "react";

const PlayerStats = (props) => {
  const {competitiveStats} = props.statsData.result;
  const {allHeroes} = props.statsData.result.competitiveStats.careerStats;

  return (
    <div className="card player-stats-data">
      <div className="card-header player-stats-header">
        <img src={props.statsData.result.ratingIcon} alt="rank" className="rank-img"/>
        <div>
          <h5>{props.statsData.result.ratingName}</h5>
          <h5>{props.statsData.result.rating} Points</h5>
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
            <h6>{props.statsData.result.gamesWon}</h6>
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
