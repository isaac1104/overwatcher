import React from "react";
import _ from "lodash";

const HeroesData = (props) => {
    return (
    <div className="card">
      <div className="card-header">
        <h5>Heroes Summary</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <div className="card-title">
              <h5>Heroes</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                return (
                  <div className="heroes">
                    <img src={`./../../images/heroes/${key}.png`} className="portrait" alt="portrait"/>
                    <h6>{key}</h6>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-md-1">
            <div className="card-title">
              <h5>W</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.games_won) {
                  return (
                    <h6>{value.general_stats.games_won}</h6>
                  )
                } else {
                  return (
                    <h6>0</h6>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-1">
            <div className="card-title">
              <h5>L</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.games_lost) {
                  return (
                    <h6>{value.general_stats.games_lost}</h6>
                  )
                } else {
                  return (
                    <h6>0</h6>
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
                    <h6>{(value.general_stats.win_percentage * 100).toFixed(0)}</h6>
                  )
                } else {
                  return (
                    <h6>0</h6>
                  )
                }
              })}
            </div>
          </div>
          <div className="col-md-2">
            <div className="card-title">
              <h5>K/D</h5>
              <hr/>
              {_.map(props.heroesResult, (value, key) => {
                if (value.general_stats.eliminations && value.general_stats.deaths) {
                  return (
                    <h6>{(value.general_stats.eliminations / value.general_stats.deaths).toFixed(2)}</h6>
                  )
                } else {
                  return (
                    <h6>0</h6>
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
                if (value.general_stats.time_played) {
                  return (
                    <h6>{value.general_stats.time_played.toFixed(2)}</h6>
                  )
                } else {
                  return (
                    <h6>0</h6>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroesData;
