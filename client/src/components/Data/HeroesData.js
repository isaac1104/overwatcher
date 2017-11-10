import React from "react";
import _ from "lodash";
import img from "./../../images/heroes/tracer.png"

const HeroesData = (props) => {

  const sorted = _.orderBy(props.result.competitiveStats.topHeroes, ["gamesWon"], ["desc"]);

  console.log(sorted);

    return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <div className="card-title">
              <h5>Heroes</h5>
              <hr/>
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <div className="heroes">
                    <img src={img} className="portrait" alt="portrait"/>
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
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <h6>{value.gamesWon}</h6>
                )
              })}
            </div>
          </div>
          <div className="col-md-1">
            <div className="card-title">
              <h5>L</h5>
              <hr/>
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <h6>{value.gamesPlayed}</h6>
                )
              })}
            </div>
          </div>
          <div className="col-md-2">
            <div className="card-title">
              <h5>Win %</h5>
              <hr/>
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <h6>{value.winPercentage}%</h6>
                )
              })}
            </div>
          </div>
          <div className="col-md-2">
            <div className="card-title">
              <h5>K/D</h5>
              <hr/>
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <h6>{value.eliminationsPerLife}</h6>
                )
              })}
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-title">
              <h5>Time Played</h5>
              <hr/>
              {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
                return (
                  <h6>{value.timePlayed}</h6>
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
