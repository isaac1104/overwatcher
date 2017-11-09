import React from "react";
import _ from "lodash";

const HeroesData = (props) => {

_.map(props.heroesResult, (value, key) => {
    console.log(key, value, value.general_stats);
  });

  return (
    <div className="card">
      <div className="card-header">
        <h5>Heroes Summary</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <div className="card-title">
              <h5></h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-title">
              <h5>Heroes</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                return (
                  <h6>{key}</h6>
                )
              })}
            </div>
          </div>
          <div className="col-md-1">
            <div className="card-title">
              <h5>K</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.eliminations) {
                  return (
                    <h6>{value.general_stats.eliminations}</h6>
                  )
                } else {
                  return (
                    <h6>N/A</h6>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-1">
            <div className="card-title">
              <h5>D</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.deaths) {
                  return (
                    <h6>{value.general_stats.deaths}</h6>
                  )
                } else {
                  return (
                    <h6>N/A</h6>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-2">
            <div className="card-title">
              <h5>Win %</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.win_percentage) {
                  return (
                    <h6>{value.general_stats.win_percentage}</h6>
                  )
                } else {
                  return(
                    <h6>N/A</h6>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-title">
              <h5>Time Played</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                return (
                  <h6>{value.general_stats.time_played.toFixed(2)}</h6>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default HeroesData;
