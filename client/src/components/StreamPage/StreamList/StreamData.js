import React from "react";

const StreamData = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.thumbnail_url} alt="thumbnail" className="img-responsive"/>
        <h3>{props.title}</h3>
        <h5>Stream Started: {props.started_at}</h5>
        <h6>Viewer Count: {props.viewer_count}</h6>
      </div>
    </div>
  )
};

export default StreamData;
