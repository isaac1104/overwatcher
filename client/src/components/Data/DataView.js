import React from "react";
import DataHeader from "./DataHeader";
import DetailedData from "./DetailedData";
import HeroesData from "./HeroesData";

const DataView = (props) => {
  return (
    <div>
      <DataHeader result={props.result} detailedResult={props.detailedResult} battleTag={props.battleTag}/>
      <div>
        <DetailedData result={props.result} detailedResult={props.detailedResult}/>
        <HeroesData/>
      </div>
    </div>
  )
};

export default DataView;
