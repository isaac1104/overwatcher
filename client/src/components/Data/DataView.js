import React from "react";
import DataHeader from "./DataHeader";
import DetailedData from "./DetailedData";
import HeroesData from "./HeroesData";
import "./Data.css";

const DataView = (props) => {
  return (
    <div>
      <DataHeader result={props.result} detailedResult={props.detailedResult} battleTag={props.battleTag}/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <DetailedData result={props.result} detailedResult={props.detailedResult}/>
          </div>
          <div className="col-md-9">
            <HeroesData heroesResult={props.heroesResult}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DataView;
