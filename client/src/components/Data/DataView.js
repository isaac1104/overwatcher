import React from "react";
import DataHeader from "./DataHeader";

const DataView = (props) => {
  return (
    <div>
      <DataHeader result={props.result} detailedResult={props.detailedResult} heroesResult={props.heroesResult} battleTag={props.battleTag}/>
    </div>
  )
};

export default DataView;
