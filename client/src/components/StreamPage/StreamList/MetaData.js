import React from "react";

const MetaData = (props) => {
  return (
    <div className="card-body">
      <p className="card-text">currently playing as: {props.hero}({props.role})</p>
    </div>
  )
};

export default MetaData;
