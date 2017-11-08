import React from "react";
import DataHeader from "./DataHeader";
import DetailedData from "./DetailedData";

const DataView = (props) => {
  return (
    <div>
      <DataHeader result={props.result} detailedResult={props.detailedResult} battleTag={props.battleTag}/>
      <DetailedData result={props.result} detailedResult={props.detailedResult}/>
    </div>
  )
};

export default DataView;
