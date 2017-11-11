import React from "react";
import AvatarData from "./AvatarData";
import PlayerStats from "./PlayerStats";
import DetailedData from "./DetailedData";
import HeroesData from "./HeroesData";
import SubData from "./SubData";
import "./Data.css";

const DataView = (props) => {
  return (
    <div>
      <div>
        <AvatarData result={props.result} battleTag={props.battleTag}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <PlayerStats result={props.result}/>
            <SubData result={props.result}/>
            <DetailedData result={props.result}/>
          </div>
          <div className="col-md-7">
            <HeroesData result={props.result}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataView;
