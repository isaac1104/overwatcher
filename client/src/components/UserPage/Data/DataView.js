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
        <AvatarData {...props}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <PlayerStats {...props}/>
            <SubData {...props}/>
            <DetailedData {...props}/>
          </div>
          <div className="col-md-7">
            <HeroesData {...props}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataView;
