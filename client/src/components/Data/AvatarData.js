import React from "react";

const AvatarData = (props) => {
  return(
    <div className="container player-stats">
      <div className="card player-intro">
        <div className="card-header player-avatar">
          <div>
            <img src={props.result.icon} className="img-responsive avatar" alt="avatar"/>
          </div>
          <div>
            <h5>LV.{props.result.level}</h5>
            <h4>{props.result.name}</h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AvatarData;
