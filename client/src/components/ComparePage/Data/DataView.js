import React from "react";
import Player1Data from "./Player1Data";
import Player2Data from "./Player2Data";

const DataView = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Player1Data result1={props.result1}/>
        </div>
        <div className="col-md-6">
          <Player2Data result2={props.result2}/>
        </div>
      </div>
    </div>
  )
};

export default DataView;
