import React from "react";

const DataHeader = (props) => {
  return(
    <div className="container player-stats">
      <div className="card">
        <div className="card-header player-avatar">
          <img src={props.result.avatar} className="img-responsive avatar"/>
          <h4>{props.battleTag}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img src={props.result.rank_image} alt="rank" className="rank-img "/>
                </div>
                <div className="col-md=6">
                  <h5>{props.result.tier}</h5>
                  <hr/>
                  <h5>{props.result.comprank} Points</h5>
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
                  <h6>{props.result.win_rate}%</h6>
                  <h6>{props.result.wins} / {props.result.losses}</h6>
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
