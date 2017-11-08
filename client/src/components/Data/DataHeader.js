import React from "react";
import "./Data.css";

const DataHeader = (props) => {
  console.log(props.result);
  return(
    <div className="card mb-3 container">
      <div className="card-header">
        <h1>{props.battleTag}</h1>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <img src={props.result.rank_image} alt="rank" className="rank-img "/>
              </div>
              <div className="col-md=6">
                <h3>{props.result.tier}</h3>
                <h4>{props.result.comprank} Points</h4>
                <h3>LV.{props.result.level}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h3>Win Rate</h3>
                <hr/>
                <h5>{props.result.win_rate}%</h5>
                <h5>{props.result.wins} / {props.result.losses}</h5>
              </div>
              <div className="col-md-4">
                <h3>K/D</h3>
                <hr/>
                <h5>{props.result.win_rate}%</h5>
                <h5>{props.result.wins} / {props.result.losses}</h5>
              </div>
              <div className="col-md-4">
                <h3>Win Rate</h3>
                <hr/>
                <h5>{props.result.win_rate}%</h5>
                <h5>{props.result.wins} / {props.result.losses}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataHeader;
