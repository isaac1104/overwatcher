import React from "react";
import Player1Data from "./Player1Data";
import Player2Data from "./Player2Data";

const DataView = (props) => {
  return (
    <div className="container">
      <Player1Data result1={props.result1}/>
      <Player2Data result2={props.result2}/>
    </div>
  )
};

export default DataView;
