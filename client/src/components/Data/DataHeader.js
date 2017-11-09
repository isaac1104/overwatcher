import React from "react";

const DataHeader = (props) => {
  return(
    <div className="container player-stats">
      <div className="card">
        <div className="card-header player-avatar">
          <img src={props.result.icon} className="img-responsive avatar" alt="avatar"/>
          <h4>{props.result.name}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img src={props.result.ratingIcon} alt="rank" className="rank-img "/>
                </div>
                <div className="col-md=6">
                  <h5>{props.result.ratingName}</h5>
                  <hr/>
                  <h5>{props.result.rating} Points</h5>
                  <hr/>
                  <h5>LV.{props.result.level}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <h5>Win Rate</h5>
                  <hr/>
                  <h6>{((props.result.competitiveStats.games.won / props.result.competitiveStats.games.played) * 100).toFixed(0)}%</h6>
                  <h6>{props.result.competitiveStats.games.won} / {props.result.competitiveStats.games.played - props.result.competitiveStats.games.won}</h6>
                </div>
                <div className="col-md-4">
                  <h5>K/D</h5>
                  <hr/>
                  <h6>{props.detailedResult.kpd}</h6>
                </div>
                <div className="col-md-4">
                  <h5>Time Played</h5>
                  <hr/>
                  <h6>{props.detailedResult.time_played} hour(s)</h6>
                  <h6>{props.detailedResult.games_played} game(s)</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataHeader;
