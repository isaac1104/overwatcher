import React from "react";
import AvatarData from "./AvatarData";
import PlayerStats from "./PlayerStats";
import DetailedData from "./DetailedData";
import HeroesData from "./HeroesData";
import "./Data.css";

const DataView = (props) => {
  return (
    <div>
      <div>
        <AvatarData result={props.result} battleTag={props.battleTag}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PlayerStats result={props.result}/>
            <DetailedData result={props.result}/>
          </div>
          <div className="col-md-6">
            <HeroesData heroesResult={props.heroesResult}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataView;
