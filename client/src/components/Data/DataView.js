import React from "react";
import DataHeader from "./DataHeader";

const DataView = (props) => {
  return (
    <div>
      <DataHeader result={props.result} battleTag={props.battleTag}/>
    </div>
  )
};

export default DataView;
